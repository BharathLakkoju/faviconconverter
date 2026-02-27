'use client';

import { useState } from 'react';

export interface SizeOption {
    size: number;
    label: string;
    selected: boolean;
}

const DEFAULT_SIZES: SizeOption[] = [
    { size: 16, label: '16×16', selected: true },
    { size: 32, label: '32×32', selected: true },
    { size: 48, label: '48×48', selected: true },
    { size: 64, label: '64×64', selected: true },
    { size: 180, label: '180×180 (Apple)', selected: true },
    { size: 192, label: '192×192 (Android)', selected: true },
    { size: 512, label: '512×512 (PWA)', selected: true },
];

interface SizeSelectorProps {
    onChange: (sizes: number[]) => void;
}

export default function SizeSelector({ onChange }: SizeSelectorProps) {
    const [sizes, setSizes] = useState<SizeOption[]>(DEFAULT_SIZES);
    const [customSize, setCustomSize] = useState('');
    const [customError, setCustomError] = useState('');

    const toggleSize = (index: number) => {
        const updated = [...sizes];
        updated[index].selected = !updated[index].selected;
        setSizes(updated);
        onChange(updated.filter((s) => s.selected).map((s) => s.size));
    };

    const addCustom = () => {
        setCustomError('');
        const val = parseInt(customSize, 10);
        if (isNaN(val) || val < 8 || val > 1024) {
            setCustomError('Enter a value between 8 and 1024');
            return;
        }
        if (sizes.some((s) => s.size === val)) {
            setCustomError('Size already exists');
            return;
        }
        const updated = [...sizes, { size: val, label: `${val}×${val} (Custom)`, selected: true }];
        setSizes(updated);
        setCustomSize('');
        onChange(updated.filter((s) => s.selected).map((s) => s.size));
    };

    const selectAll = () => {
        const updated = sizes.map((s) => ({ ...s, selected: true }));
        setSizes(updated);
        onChange(updated.map((s) => s.size));
    };

    const deselectAll = () => {
        const updated = sizes.map((s) => ({ ...s, selected: false }));
        setSizes(updated);
        onChange([]);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center text-xs">📐</span>
                    Favicon Sizes
                </h3>
                <div className="flex gap-2 text-xs">
                    <button onClick={selectAll} className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors font-medium">
                        Select all
                    </button>
                    <span className="text-muted">·</span>
                    <button onClick={deselectAll} className="text-muted hover:text-foreground transition-colors">
                        None
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {sizes.map((s, i) => (
                    <button
                        key={`${s.size}-${i}`}
                        onClick={() => toggleSize(i)}
                        aria-pressed={s.selected}
                        className={`group relative rounded-xl px-3 py-2.5 text-sm font-medium border transition-all duration-200 ${s.selected
                                ? 'border-violet-500/50 bg-violet-50 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 shadow-sm'
                                : 'border-border bg-surface text-muted hover:border-border-strong hover:text-foreground'
                            }`}
                    >
                        <span className={`inline-block w-3 h-3 rounded-full mr-2 border-2 transition-all ${s.selected
                                ? 'border-violet-500 bg-violet-500'
                                : 'border-gray-400 dark:border-gray-600 bg-transparent'
                            }`} />
                        {s.label}
                    </button>
                ))}
            </div>

            {/* Add Custom Size */}
            <div className="flex gap-2">
                <input
                    type="number"
                    min={8}
                    max={1024}
                    value={customSize}
                    onChange={(e) => setCustomSize(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') addCustom(); }}
                    placeholder="Custom size (px)"
                    aria-label="Add custom favicon size"
                    className="flex-1 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
                />
                <button
                    onClick={addCustom}
                    className="rounded-xl border border-violet-300 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-500/20 transition-all"
                >
                    + Add
                </button>
            </div>
            {customError && (
                <p className="text-xs text-red-600 dark:text-red-400">{customError}</p>
            )}
        </div>
    );
}
