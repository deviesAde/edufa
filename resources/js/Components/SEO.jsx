import { Head, usePage } from '@inertiajs/react';

export default function SEO({ 
    title, 
    description = "EDUfa Centre adalah Biro Psikologi & Pusat Layanan Terapi di Bandung. Kami melayani asesmen psikologi, pelatihan, konseling, dan terapi ABK untuk anak hingga dewasa.", 
    image = "/hero/logo.png", 
    canonical, 
    schemaType = 'LocalBusiness',
    schemaData = null,
    keywords = "biro psikologi bandung, terapi abk bandung, psikolog anak bandung, pusat layanan terapi, asesmen psikologi bandung, edufa centre, paud inklusi"
}) {
    // Get the base url from inertia page props if available, otherwise fallback
    const { url } = usePage();
    const appUrl = (typeof window !== 'undefined' ? window.location.origin : 'https://edufa.com');
    const pageUrl = canonical || (appUrl + url);
    const fullImageUrl = image.startsWith('http') ? image : `${appUrl}${image.startsWith('/') ? image : `/${image}`}`;

    const siteName = "EDUfa Centre";
    const defaultTitle = `${title} | ${siteName}`;

    
    let finalSchema = schemaData;
    if (!finalSchema) {
        if (schemaType === 'LocalBusiness') {
            finalSchema = {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": siteName,
                "image": fullImageUrl,
                "@id": appUrl,
                "url": appUrl,
                "telephone": "+62811223344", 
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bandung",
                    "addressRegion": "Jawa Barat",
                    "addressCountry": "ID"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                    ],
                    "opens": "08:00",
                    "closes": "16:00"
                }
            };
        }
    }

    return (
        <Head>
            <title>{defaultTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={schemaType === 'Article' ? 'article' : 'website'} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={defaultTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={pageUrl} />
            <meta name="twitter:title" content={defaultTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />

            {/* Canonical Link */}
            <link rel="canonical" href={pageUrl} />

            {/* Structured Data / JSON-LD */}
            {finalSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(finalSchema)}
                </script>
            )}
        </Head>
    );
}
