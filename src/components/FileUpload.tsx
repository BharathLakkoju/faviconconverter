'use client';

import { useState, useRef, useCallback } from 'react';
import {
    type ImageSource,
    isSupportedExtension,
    isSvgFile,
    isValidSvg,
    getSupportedFormatsLabel,
    readImageFile,
} from '@/lib/svg-renderer';

interface FileUploadProps {
    onImageLoaded: (source: ImageSource, fileName: string) => void;
}

export default function FileUpload({ onImageLoaded }: FileUploadProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [mode, setMode] = useState<'upload' | 'paste'>('upload');
    const [pasteValue, setPasteValue] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const MAX_SIZE = 10 * 1024 * 1024; // 10MB

    const validateAndLoadSvg = useCallback(
        (content: string, name: string) => {
            setError(null);
            if (!isValidSvg(content)) {
                setError('Invalid SVG format. Please paste valid SVG code.');
                return;
            }
            onImageLoaded({ type: 'svg', data: content }, name);
        },
        [onImageLoaded]
    );

    const handleFile = useCallback(
        async (file: File) => {
            setError(null);

            if (!isSupportedExtension(file.name) && !file.type.startsWith('image/')) {
                setError(`Unsupported file type. Supported: ${getSupportedFormatsLabel()}`);
                return;
            }
            if (file.size > MAX_SIZE) {
                setError('File size exceeds 10MB limit.');
                return;
            }

            try {
                if (isSvgFile(file)) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const content = reader.result as string;
                        if (!isValidSvg(content)) {
                            setError('Invalid SVG file. Could not parse SVG content.');
                            return;
                        }
                        onImageLoaded({ type: 'svg', data: content }, file.name);
                    };
                    reader.onerror = () => setError('Failed to read file.');
                    reader.readAsText(file);
                } else {
                    const source = await readImageFile(file);
                    onImageLoaded(source, file.name);
                }
            } catch {
                setError('Failed to load image file.');
            }
        },
        [onImageLoaded]
    );

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragging(false);
            const file = e.dataTransfer.files[0];
            if (file) handleFile(file);
        },
        [handleFile]
    );

    const handlePaste = () => {
        if (!pasteValue.trim()) {
            setError('Please paste SVG code.');
            return;
        }
        validateAndLoadSvg(pasteValue, 'pasted.svg');
    };

    return (
        <div className="w-full space-y-4">
            {/* Mode Tabs */}
            <div className="flex gap-1 rounded-xl bg-surface p-1 border border-border">
                <button
                    onClick={() => { setMode('upload'); setError(null); }}
                    className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${mode === 'upload'
                            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20'
                            : 'text-muted hover:text-foreground'
                        }`}
                >
                    📁 Upload Image
                </button>
                <button
                    onClick={() => { setMode('paste'); setError(null); }}
                    className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${mode === 'paste'
                            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20'
                            : 'text-muted hover:text-foreground'
                        }`}
                >
                    📋 Paste SVG Code
                </button>
            </div>

            {/* Upload Mode */}
            {mode === 'upload' && (
                <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    role="button"
                    tabIndex={0}
                    aria-label="Upload image file"
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click(); }}
                    className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-10 sm:p-14 text-center transition-all duration-300 ${isDragging
                            ? 'border-violet-500 bg-violet-500/10 scale-[1.02]'
                            : 'border-border-strong bg-surface hover:border-violet-400 hover:bg-surface-hover'
                        }`}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*,.svg,.ico"
                        className="hidden"
                        aria-label="Choose image file"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFile(file);
                            e.target.value = '';
                        }}
                    />
                    <div className="space-y-4">
                        <div className="mx-auto w-16 h-16 rounded-2xl bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center">
                            <svg className="w-8 h-8 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-foreground">
                                Drop your image here
                            </p>
                            <p className="mt-1.5 text-sm text-muted">
                                SVG, PNG, JPEG, WebP, GIF, BMP &amp; more · Max 10MB
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Paste Mode */}
            {mode === 'paste' && (
                <div className="space-y-3">
                    <textarea
                        value={pasteValue}
                        onChange={(e) => setPasteValue(e.target.value)}
                        placeholder='Paste your SVG code here... (e.g. <svg xmlns="http://www.w3.org/2000/svg" ...>)'
                        aria-label="Paste SVG code"
                        className="w-full h-44 rounded-xl border border-border bg-surface p-4 text-sm text-foreground placeholder-muted font-mono resize-none focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
                    />
                    <button
                        onClick={handlePaste}
                        className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                        Load SVG Code
                    </button>
                </div>
            )}

            {/* Error */}
            {error && (
                <div className="rounded-xl border border-red-300 dark:border-red-500/30 bg-red-50 dark:bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400" role="alert">
                    ⚠️ {error}
                </div>
            )}

            {/* Privacy Notice */}
            <p className="text-center text-xs text-muted flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Your files never leave your browser — 100% client-side processing
            </p>
        </div>
    );
}
