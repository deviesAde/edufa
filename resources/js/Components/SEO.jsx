import { Head } from '@inertiajs/react';

export default function SEO({ 
    title, 
    description = "Biro Psikologi & Pusat Layanan Terapi EDUfa. Menumbuhkan Harapan, Mencapai Masa Depan Terpercaya.", 
    image = "/hero/logo.png", 
    canonical, 
    schema 
}) {
    // Basic defaults
    const siteName = "EDUfa Centre";
    const defaultTitle = `${title} | ${siteName}`;
    const pageUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

    return (
        <Head>
            <title>{defaultTitle}</title>
            <meta name="description" content={description} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={defaultTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={pageUrl} />
            <meta name="twitter:title" content={defaultTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Canonical Link */}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Structured Data / JSON-LD */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Head>
    );
}
