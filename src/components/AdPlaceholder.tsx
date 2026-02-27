/**
 * Ad placement placeholder for future Google AdSense integration.
 */
interface AdPlaceholderProps {
    slot: 'banner' | 'sidebar' | 'inline' | 'sticky-bottom';
    className?: string;
}

export default function AdPlaceholder({ slot, className = '' }: AdPlaceholderProps) {
    const sizeClasses: Record<string, string> = {
        banner: 'h-24',
        sidebar: 'h-64',
        inline: 'h-20',
        'sticky-bottom': 'h-16 fixed bottom-0 left-0 right-0 md:hidden z-40',
    };

    return (
        <div
            className={`rounded-xl border border-dashed border-border bg-surface flex items-center justify-center text-xs text-muted ${sizeClasses[slot]} ${className}`}
            aria-hidden="true"
            data-ad-slot={slot}
        >
            <span className="opacity-50">Ad Space</span>
        </div>
    );
}
