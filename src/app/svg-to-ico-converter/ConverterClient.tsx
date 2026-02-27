'use client';

import { useState, useCallback } from 'react';
import FileUpload from '@/components/FileUpload';
import SizeSelector from '@/components/SizeSelector';
import Preview from '@/components/Preview';
import CodeSnippet from '@/components/CodeSnippet';
import AdPlaceholder from '@/components/AdPlaceholder';
import { renderImageToMultipleSizes, type RenderedImage, type ImageSource } from '@/lib/svg-renderer';
import { generateFaviconPackage, generateIcoOnly } from '@/lib/favicon-packager';

const DEFAULT_SIZES = [16, 32, 48, 64, 180, 192, 512];

export default function ConverterClient() {
    const [imageSource, setImageSource] = useState<ImageSource | null>(null);
    const [fileName, setFileName] = useState('');
    const [selectedSizes, setSelectedSizes] = useState<number[]>(DEFAULT_SIZES);
    const [images, setImages] = useState<RenderedImage[]>([]);
    const [isConverting, setIsConverting] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [conversionDone, setConversionDone] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleImageLoaded = useCallback((source: ImageSource, name: string) => {
        setImageSource(source);
        setFileName(name);
        setImages([]);
        setConversionDone(false);
        setError(null);
    }, []);

    const handleConvert = async () => {
        if (!imageSource) return;
        if (selectedSizes.length === 0) {
            setError('Please select at least one favicon size.');
            return;
        }

        setIsConverting(true);
        setError(null);
        try {
            const rendered = await renderImageToMultipleSizes(imageSource, selectedSizes);
            setImages(rendered);
            setConversionDone(true);
        } catch (e) {
            setError(`Conversion failed: ${e instanceof Error ? e.message : 'Unknown error'}`);
        } finally {
            setIsConverting(false);
        }
    };

    const handleDownloadIco = async () => {
        if (images.length === 0) return;
        setIsDownloading(true);
        try {
            const blob = await generateIcoOnly(images);
            downloadBlob(blob, 'favicon.ico');
        } catch (e) {
            setError(`ICO generation failed: ${e instanceof Error ? e.message : 'Unknown error'}`);
        } finally {
            setIsDownloading(false);
        }
    };

    const handleDownloadPackage = async () => {
        if (images.length === 0) return;
        setIsDownloading(true);
        try {
            const baseName = fileName.replace(/\.[^.]+$/, '');
            const blob = await generateFaviconPackage({ images, siteName: baseName });
            downloadBlob(blob, 'favicon-package.zip');
        } catch (e) {
            setError(`Package generation failed: ${e instanceof Error ? e.message : 'Unknown error'}`);
        } finally {
            setIsDownloading(false);
        }
    };

    const downloadBlob = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleReset = () => {
        setImageSource(null);
        setFileName('');
        setImages([]);
        setConversionDone(false);
        setError(null);
    };

    return (
        <div className="space-y-6">
            {/* Step 1: Upload */}
            <section className="glass-card p-6 sm:p-8 animate-fade-in-up">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                            1
                        </span>
                        <h2 className="text-lg font-bold text-foreground">Upload Image</h2>
                    </div>
                    {imageSource && (
                        <button
                            onClick={handleReset}
                            className="text-xs text-muted hover:text-foreground border border-border rounded-lg px-3 py-1.5 hover:border-border-strong hover:bg-surface transition-all"
                        >
                            ↻ Reset
                        </button>
                    )}
                </div>
                {!imageSource ? (
                    <FileUpload onImageLoaded={handleImageLoaded} />
                ) : (
                    <div className="flex items-center gap-3 rounded-xl border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-3">
                        <span className="text-emerald-600 dark:text-emerald-400 text-lg">✓</span>
                        <div>
                            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">{fileName}</p>
                            <p className="text-xs text-emerald-600/70 dark:text-emerald-400/60">
                                {imageSource.type === 'svg' ? 'SVG' : 'Image'} loaded successfully
                            </p>
                        </div>
                    </div>
                )}
            </section>

            {/* Step 2: Select Sizes */}
            {imageSource && (
                <section className="glass-card p-6 sm:p-8 animate-fade-in-up animate-delay-100">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                            2
                        </span>
                        <h2 className="text-lg font-bold text-foreground">Select Sizes</h2>
                    </div>
                    <SizeSelector onChange={setSelectedSizes} />
                </section>
            )}

            {/* Step 3: Convert */}
            {imageSource && (
                <section className="animate-fade-in-up animate-delay-200">
                    <button
                        onClick={handleConvert}
                        disabled={isConverting || selectedSizes.length === 0}
                        className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-xl glow-button hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isConverting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                </svg>
                                Converting...
                            </span>
                        ) : (
                            '⚡ Convert to Favicon'
                        )}
                    </button>
                </section>
            )}

            {/* Error */}
            {error && (
                <div className="rounded-xl border border-red-300 dark:border-red-500/30 bg-red-50 dark:bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400" role="alert">
                    ⚠️ {error}
                </div>
            )}

            {/* Step 4: Preview & Download */}
            {conversionDone && images.length > 0 && (
                <>
                    <section className="glass-card p-6 sm:p-8 animate-fade-in-up">
                        <Preview images={images} svgName={fileName} />
                    </section>

                    {/* Download Buttons */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up animate-delay-100">
                        <button
                            onClick={handleDownloadIco}
                            disabled={isDownloading}
                            className="rounded-2xl border border-violet-300 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 px-6 py-4 text-sm font-semibold text-violet-700 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download favicon.ico
                        </button>
                        <button
                            onClick={handleDownloadPackage}
                            disabled={isDownloading}
                            className="rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4 text-sm font-bold text-white shadow-lg glow-button hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Full Package (.zip)
                        </button>
                    </section>

                    {/* Code Snippet */}
                    <section className="glass-card p-6 sm:p-8 animate-fade-in-up animate-delay-200">
                        <CodeSnippet />
                    </section>

                    <AdPlaceholder slot="inline" className="animate-fade-in-up animate-delay-300" />
                </>
            )}
        </div>
    );
}
