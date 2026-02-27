/**
 * Image Renderer – renders any image (SVG, PNG, JPEG, WebP, GIF, BMP, TIFF, ICO)
 * onto a canvas at any resolution. Fully client-side using the Canvas API.
 */

export interface RenderedImage {
  size: number;
  canvas: HTMLCanvasElement;
  blob: Blob;
  dataUrl: string;
}

export type ImageSource =
  | { type: 'svg'; data: string }
  | { type: 'raster'; data: string }; // data is an object URL or data URL

const SUPPORTED_EXTENSIONS = [
  '.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp', '.tiff', '.tif', '.ico', '.avif',
];

const SUPPORTED_MIME_TYPES = [
  'image/svg+xml',
  'image/png',
  'image/jpeg',
  'image/webp',
  'image/gif',
  'image/bmp',
  'image/tiff',
  'image/x-icon',
  'image/vnd.microsoft.icon',
  'image/avif',
];

/**
 * Check if a file extension is supported.
 */
export function isSupportedExtension(fileName: string): boolean {
  const lower = fileName.toLowerCase();
  return SUPPORTED_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

/**
 * Check if a MIME type is supported.
 */
export function isSupportedMimeType(mime: string): boolean {
  return SUPPORTED_MIME_TYPES.includes(mime);
}

/**
 * Get a user-friendly list of supported formats.
 */
export function getSupportedFormatsLabel(): string {
  return 'SVG, PNG, JPEG, WebP, GIF, BMP, TIFF, AVIF, ICO';
}

/**
 * Determine if a file is an SVG (text-based) vs a raster image (binary).
 */
export function isSvgFile(file: File): boolean {
  return (
    file.type === 'image/svg+xml' || file.name.toLowerCase().endsWith('.svg')
  );
}

/**
 * Load an SVG string into an Image element via object URL.
 */
function svgToImage(svgString: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load SVG image'));
    };
    img.src = url;
  });
}

/**
 * Load a raster image (PNG, JPEG, WebP, etc.) from its data URL into an Image element.
 */
function rasterToImage(dataUrl: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = dataUrl;
  });
}

/**
 * Render an image source to a canvas at the specified pixel size (square).
 * Preserves transparency and maintains aspect ratio by fitting inside the square.
 */
export async function renderImageToCanvas(
  source: ImageSource,
  size: number
): Promise<RenderedImage> {
  const img =
    source.type === 'svg'
      ? await svgToImage(source.data)
      : await rasterToImage(source.data);

  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  // Transparent background
  ctx.clearRect(0, 0, size, size);

  // Maintain aspect ratio – fit inside square
  const aspect = img.naturalWidth / img.naturalHeight;
  let drawW = size;
  let drawH = size;
  if (aspect > 1) {
    drawH = size / aspect;
  } else {
    drawW = size * aspect;
  }
  const offsetX = (size - drawW) / 2;
  const offsetY = (size - drawH) / 2;

  ctx.drawImage(img, offsetX, offsetY, drawW, drawH);

  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error('Canvas toBlob failed'))),
      'image/png'
    );
  });

  const dataUrl = canvas.toDataURL('image/png');

  return { size, canvas, blob, dataUrl };
}

/**
 * Render an image source to multiple sizes in parallel.
 */
export async function renderImageToMultipleSizes(
  source: ImageSource,
  sizes: number[]
): Promise<RenderedImage[]> {
  return Promise.all(sizes.map((s) => renderImageToCanvas(source, s)));
}

/**
 * Read an uploaded file as an ImageSource.
 * SVGs are read as text, raster images as data URLs.
 */
export function readImageFile(file: File): Promise<ImageSource> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    if (isSvgFile(file)) {
      reader.onload = () => resolve({ type: 'svg', data: reader.result as string });
      reader.onerror = () => reject(new Error('Failed to read SVG file'));
      reader.readAsText(file);
    } else {
      reader.onload = () => resolve({ type: 'raster', data: reader.result as string });
      reader.onerror = () => reject(new Error('Failed to read image file'));
      reader.readAsDataURL(file);
    }
  });
}

/**
 * Validate that a string is valid SVG content.
 */
export function isValidSvg(content: string): boolean {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'image/svg+xml');
    const errorNode = doc.querySelector('parsererror');
    if (errorNode) return false;
    return doc.documentElement.tagName.toLowerCase() === 'svg';
  } catch {
    return false;
  }
}
