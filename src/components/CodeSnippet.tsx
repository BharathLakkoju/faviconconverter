'use client';

import { useState } from 'react';
import { getHtmlSnippet } from '@/lib/favicon-packager';

export default function CodeSnippet() {
    const [copied, setCopied] = useState(false);
    const snippet = getHtmlSnippet();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(snippet);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = snippet;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-xs">📝</span>
                    HTML Snippet
                </h3>
                <button
                    onClick={handleCopy}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium border transition-all ${copied
                            ? 'border-emerald-400 dark:border-emerald-500/50 bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                            : 'border-border bg-surface text-muted hover:text-foreground hover:border-border-strong'
                        }`}
                >
                    {copied ? '✓ Copied!' : '📋 Copy'}
                </button>
            </div>
            <div className="relative rounded-xl border border-border overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-gray-50 dark:bg-gray-900/50">
                    <span className="text-xs text-muted font-mono">HTML</span>
                </div>
                <pre className="p-4 text-xs text-foreground font-mono overflow-x-auto leading-relaxed bg-gray-50 dark:bg-gray-900/30">
                    <code>{snippet}</code>
                </pre>
            </div>
            <p className="text-xs text-muted">
                Paste this inside your <code className="text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 px-1 py-0.5 rounded">&lt;head&gt;</code> tag.
            </p>
        </div>
    );
}
