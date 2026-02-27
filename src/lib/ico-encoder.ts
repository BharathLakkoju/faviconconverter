/**
 * Pure-JS ICO file encoder.
 * Constructs a multi-resolution .ico file from multiple PNG blobs.
 *
 * ICO format spec:
 *  - 6-byte header: reserved(2), type(2)=1, count(2)
 *  - 16-byte directory entry per image
 *  - Raw PNG data for each image
 */

interface IcoImage {
    width: number;
    height: number;
    pngData: ArrayBuffer;
}

/**
 * Encode multiple PNG blobs into a single ICO file blob.
 * Each PNG should be a square icon at the desired size.
 */
export async function encodePngsToIco(
    pngs: { size: number; blob: Blob }[]
): Promise<Blob> {
    // Read all PNGs into ArrayBuffers
    const images: IcoImage[] = await Promise.all(
        pngs.map(async ({ size, blob }) => {
            const buffer = await blob.arrayBuffer();
            return {
                width: size,
                height: size,
                pngData: buffer,
            };
        })
    );

    const count = images.length;
    const headerSize = 6;
    const dirEntrySize = 16;
    const dirSize = dirEntrySize * count;
    const dataOffset = headerSize + dirSize;

    // Calculate total size
    let totalDataSize = 0;
    for (const img of images) {
        totalDataSize += img.pngData.byteLength;
    }

    const totalSize = dataOffset + totalDataSize;
    const buffer = new ArrayBuffer(totalSize);
    const view = new DataView(buffer);

    // --- ICO Header ---
    view.setUint16(0, 0, true);       // Reserved
    view.setUint16(2, 1, true);       // Type: 1 = ICO
    view.setUint16(4, count, true);   // Number of images

    // --- Directory entries ---
    let currentDataOffset = dataOffset;
    for (let i = 0; i < count; i++) {
        const img = images[i];
        const entryOffset = headerSize + i * dirEntrySize;

        // Width and Height: 0 means 256
        view.setUint8(entryOffset + 0, img.width >= 256 ? 0 : img.width);
        view.setUint8(entryOffset + 1, img.height >= 256 ? 0 : img.height);
        view.setUint8(entryOffset + 2, 0);  // Color palette
        view.setUint8(entryOffset + 3, 0);  // Reserved
        view.setUint16(entryOffset + 4, 1, true);  // Color planes
        view.setUint16(entryOffset + 6, 32, true); // Bits per pixel
        view.setUint32(entryOffset + 8, img.pngData.byteLength, true); // Image size
        view.setUint32(entryOffset + 12, currentDataOffset, true);     // Offset

        currentDataOffset += img.pngData.byteLength;
    }

    // --- Image data ---
    let offset = dataOffset;
    const uint8View = new Uint8Array(buffer);
    for (const img of images) {
        uint8View.set(new Uint8Array(img.pngData), offset);
        offset += img.pngData.byteLength;
    }

    return new Blob([buffer], { type: 'image/x-icon' });
}
