'use client';

import { useState } from 'react';
import type { RenderedImage } from '@/lib/svg-renderer';

interface PreviewProps {
    images: RenderedImage[];
    svgName: string;
}

export default function Preview({ images, svgName }: PreviewProps) {
    const [previewBg, setPreviewBg] = useState<'light' | 'dark'>('dark');

    if (images.length === 0) return null;

    const tabIcon = images.find((i) => i.size === 32) || images[0];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-xs">👁️</span>
                    Preview
                </h3>
                <div className="flex gap-1 rounded-lg bg-surface p-0.5 border border-border">
                    <button
                        onClick={() => setPreviewBg('dark')}
                        aria-label="Dark mode preview"
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${previewBg === 'dark'
                                ? 'bg-gray-800 text-white shadow-sm'
                                : 'text-muted hover:text-foreground'
                            }`}
                    >
                        🌙 Dark
                    </button>
                    <button
                        onClick={() => setPreviewBg('light')}
                        aria-label="Light mode preview"
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${previewBg === 'light'
                                ? 'bg-white text-gray-900 shadow-sm border border-gray-200'
                                : 'text-muted hover:text-foreground'
                            }`}
                    >
                        ☀️ Light
                    </button>
                </div>
            </div>

            {/* Browser Tab Simulation */}
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <div className={`${previewBg === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} px-4 py-2.5`}>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-red-500/80" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <span className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className={`flex items-center gap-2 rounded-lg px-3 py-1.5 ${previewBg === 'dark' ? 'bg-gray-700' : 'bg-white'
                            }`}>
                            <img
                                src={tabIcon.dataUrl}
                                alt="Favicon preview"
                                className="w-4 h-4"
                                style={{ imageRendering: 'pixelated' }}
                            />
                            <span className={`text-xs font-medium ${previewBg === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                {svgName.replace(/\.[^.]+$/, '') || 'My Website'}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`h-20 ${previewBg === 'dark' ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center`}>
                    <span className={`text-xs ${previewBg === 'dark' ? 'text-gray-600' : 'text-gray-300'}`}>
                        Browser tab preview
                    </span>
                </div>
            </div>

            {/* Size Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
                {images
                    .sort((a, b) => a.size - b.size)
                    .map((img) => (
                        <div
                            key={img.size}
                            className="group rounded-xl border border-border bg-surface p-3 text-center hover:border-violet-400 hover:shadow-sm transition-all"
                        >
                            <div
                                className={`mx-auto mb-2 rounded-lg flex items-center justify-center ${previewBg === 'dark' ? 'bg-gray-900' : 'bg-white border border-gray-100'
                                    }`}
                                style={{
                                    width: Math.min(img.size, 72),
                                    height: Math.min(img.size, 72),
                                }}
                            >
                                <img
                                    src={img.dataUrl}
                                    alt={`${img.size}x${img.size} favicon`}
                                    style={{
                                        width: Math.min(img.size, 72),
                                        height: Math.min(img.size, 72),
                                        imageRendering: img.size <= 32 ? 'pixelated' : 'auto',
                                    }}
                                />
                            </div>
                            <p className="text-xs font-medium text-muted group-hover:text-foreground transition-colors">
                                {img.size}×{img.size}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
}
