import { redirect } from 'next/navigation';

// Redirect old URL to new canonical URL for SEO
export default function OldConverterRedirect() {
    redirect('/image-to-favicon-converter');
}
