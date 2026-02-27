'use client';

import { useState } from 'react';

interface SizeEntry {
    size: number;
    label: string;
    platform: string;
    emoji: string;
    selected: boolean;
    isCustom?: boolean;
}

const DEFAULT_SIZES: SizeEntry[] = [
    { size: 16, label: '16×16', platform: 'Browser Tab', emoji: '🌐', selected: true },
    { size: 32, label: '32×32', platform: 'Taskbar / New Tab', emoji: '🖥️', selected: true },
    { size: 48, label: '48×48', platform: 'Windows Shortcut', emoji: '🪟', selected: true },
    { size: 64, label: '64×64', platform: 'High-DPI Tabs', emoji: '🔍', selected: true },
    { size: 180, label: '180×180', platform: 'Apple Touch Icon', emoji: '🍎', selected: true },
    { size: 192, label: '192×192', platform: 'Android Chrome', emoji: '🤖', selected: true },
    { size: 512, label: '512×512', platform: 'PWA Splash Screen', emoji: '📱', selected: true },
];

interface SizeSelectorProps {
    onChange: (sizes: number[]) => void;
}

export default function SizeSelector({ onChange }: SizeSelectorProps) {
    const [sizes, setSizes] = useState<SizeEntry[]>(DEFAULT_SIZES);
    const [customSize, setCustomSize] = useState('');
    const [customError, setCustomError] = useState('');

    const emit = (updated: SizeEntry[]) => {
        setSizes(updated);
        onChange(updated.filter((s) => s.selected).map((s) => s.size));
    };

    const toggle = (index: number) => {
        const updated = [...sizes];
        updated[index] = { ...updated[index], selected: !updated[index].selected };
        emit(updated);
    };

    const allSelected = sizes.every((s) => s.selected);
    const noneSelected = sizes.every((s) => !s.selected);
    const selectedCount = sizes.filter((s) => s.selected).length;

    const setAll = (val: boolean) => emit(sizes.map((s) => ({ ...s, selected: val })));

    const addCustom = () => {
        setCustomError('');
        const val = parseInt(customSize, 10);
        if (isNaN(val) || val < 8 || val > 1024) {
            setCustomError('Size must be between 8–1024 px');
            return;
        }
        if (sizes.some((s) => s.size === val)) {
            setCustomError('This size already exists');
            return;
        }
        setCustomSize('');
        emit([...sizes, { size: val, label: `${val}×${val}`, platform: 'Custom', emoji: '⚙️', selected: true, isCustom: true }]);
    };

    const removeCustom = (index: number) => {
        const updated = sizes.filter((_, i) => i !== index);
        emit(updated);
    };

    return (
        <div className="space-y-4">
            {/* Title row with action buttons */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center text-xs">📐</span>
                    Favicon Sizes
                    <span className="ml-1 text-xs font-normal text-muted">
                        ({selectedCount}/{sizes.length})
                    </span>
                </h3>
                <div className="flex gap-1.5">
                    <button
                        onClick={() => setAll(true)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold border transition-all ${allSelected
                            ? 'bg-violet-600 text-white border-violet-600 shadow-sm shadow-violet-500/20'
                            : 'border-border bg-surface text-muted hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400'
                            }`}
                    >
                        ✓ Select All
                    </button>
                    <button
                        onClick={() => setAll(false)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold border transition-all ${noneSelected
                            ? 'bg-gray-600 dark:bg-gray-500 text-white border-gray-600 dark:border-gray-500 shadow-sm'
                            : 'border-border bg-surface text-muted hover:border-gray-400 hover:text-foreground'
                            }`}
                    >
                        ✕ Clear All
                    </button>
                </div>
            </div>

            {/* Size cards list */}
            <div className="space-y-2">
                {sizes.map((s, i) => (
                    <div
                        key={`${s.size}-${i}`}
                        onClick={() => toggle(i)}
                        role="button"
                        tabIndex={0}
                        aria-pressed={s.selected}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i); } }}
                        className={`group relative flex items-center gap-4 rounded-xl border px-4 py-3.5 cursor-pointer transition-all duration-200 select-none ${s.selected
                            ? 'border-violet-400 dark:border-violet-500/40 bg-violet-50 dark:bg-[#1e1535] shadow-sm shadow-violet-500/10'
                            : 'border-border bg-white dark:bg-[#141218] hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                    >
                        {/* Toggle switch */}
                        <div
                            className={`relative flex-shrink-0 w-10 h-6 rounded-full transition-all duration-300 ${s.selected ? 'bg-violet-500' : 'bg-gray-300 dark:bg-gray-700'
                                }`}
                        >
                            <div
                                className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 ${s.selected ? 'left-[18px]' : 'left-0.5'
                                    }`}
                            />
                        </div>

                        {/* Emoji */}
                        <span className="text-xl flex-shrink-0 w-8 text-center">{s.emoji}</span>

                        {/* Size info */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-baseline gap-2">
                                <span className={`text-sm font-bold transition-colors ${s.selected ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'
                                    }`}>
                                    {s.label}
                                </span>
                                <span className={`text-xs transition-colors ${s.selected ? 'text-violet-600 dark:text-violet-400' : 'text-gray-400 dark:text-gray-600'
                                    }`}>
                                    {s.platform}
                                </span>
                            </div>
                        </div>

                        {/* Visual size indicator bar */}
                        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                            <div
                                className={`rounded transition-all ${s.selected
                                    ? 'bg-violet-400 dark:bg-violet-500'
                                    : 'bg-gray-200 dark:bg-gray-700'
                                    }`}
                                style={{
                                    width: Math.max(8, Math.round((s.size / 512) * 60)),
                                    height: Math.max(8, Math.round((s.size / 512) * 60)),
                                    maxWidth: 60,
                                    maxHeight: 60,
                                }}
                                title={`${s.size}px`}
                            />
                        </div>

                        {/* Remove button for custom sizes */}
                        {s.isCustom && (
                            <button
                                onClick={(e) => { e.stopPropagation(); removeCustom(i); }}
                                className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
                                title="Remove custom size"
                            >
                                🗑️
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* Add custom size */}
            <div className="flex items-center gap-2">
                <div className="relative flex-1">
                    <input
                        type="number"
                        min={8}
                        max={1024}
                        value={customSize}
                        onChange={(e) => { setCustomSize(e.target.value); setCustomError(''); }}
                        onKeyDown={(e) => { if (e.key === 'Enter') addCustom(); }}
                        placeholder="Add custom size (px)"
                        aria-label="Custom favicon size in pixels"
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder-muted pr-20 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
                    />
                    <button
                        onClick={addCustom}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-violet-600 hover:bg-violet-700 px-3 py-1.5 text-xs font-semibold text-white transition-all active:scale-95"
                    >
                        + Add
                    </button>
                </div>
            </div>
            {customError && (
                <p className="text-xs text-red-600 dark:text-red-400 -mt-2 pl-1">⚠️ {customError}</p>
            )}
        </div>
    );
}
