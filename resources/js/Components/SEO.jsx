import { Head, usePage } from '@inertiajs/react';

export default function SEO({ 
    title, 
    description = "EDUfa Centre adalah Biro Psikologi & Pusat Layanan Terapi di Bandung. Kami melayani asesmen psikologi, pelatihan, konseling, dan terapi ABK untuk anak hingga dewasa.", 
    image = "/logo.png", 
    canonical, 
    schemaType = 'LocalBusiness',
    schemaData = null,
    keywords = "biro psikologi bandung, terapi abk bandung, psikolog anak bandung, pusat layanan terapi, asesmen psikologi bandung, edufa centre, paud inklusi, terapi anak, terapi anak bandung",
    noindex = false,
    publishedTime,
    modifiedTime,
    author,
    breadcrumbs = [],
    faqItems = [],
}) {
    const { url } = usePage();
    const appUrl = (typeof window !== 'undefined' ? window.location.origin : 'https://edufa.co.id');
    const pageUrl = canonical || (appUrl + url);
    const fullImageUrl = image.startsWith('http') ? image : `${appUrl}${image.startsWith('/') ? image : `/${image}`}`;
    const logoUrl = `${appUrl}/logo.png`;

    const siteName = "EDUfa Centre";
    const defaultTitle = `${title} | ${siteName}`;
    const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    // Build schemas array
    const schemas = [];

    // Organization schema (always present)
    schemas.push({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteName,
        "url": appUrl,
        "logo": {
            "@type": "ImageObject",
            "url": logoUrl,
            "width": 512,
            "height": 512
        },
        "image": fullImageUrl,
        "description": "EDUfa Centre adalah Biro Psikologi & Pusat Layanan Terapi Anak Berkebutuhan Khusus (ABK) terkemuka di Bandung yang menyediakan asesmen psikologi, pelatihan, konseling, terapi, dan PAUD inklusi.",
        "telephone": "+6281111160600",
        "email": "info@edufa.co.id",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bandung",
            "addressRegion": "Jawa Barat",
            "addressCountry": "ID"
        },
        "sameAs": [
            "https://www.instagram.com/edufa_pusat/"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+6281111160600",
            "contactType": "customer service",
            "areaServed": "ID",
            "availableLanguage": ["Indonesian", "English"]
        },
        "founder": {
            "@type": "Person",
            "name": "Dr. Ernie C. Siregar",
            "jobTitle": "Psikolog Klinis & Pendiri EDUfa Centre"
        }
    });

    // WebSite schema with SearchAction (always present)
    schemas.push({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": siteName,
        "url": appUrl,
        "description": "Website resmi EDUfa Centre - Biro Psikologi & Pusat Layanan Terapi ABK di Bandung",
        "inLanguage": "id-ID",
        "publisher": {
            "@type": "Organization",
            "name": siteName,
            "logo": {
                "@type": "ImageObject",
                "url": logoUrl,
                "width": 512,
                "height": 512
            }
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${appUrl}/artikel?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    });

    // Page-specific schema
    if (schemaData) {
        schemas.push(schemaData);
    } else if (schemaType === 'LocalBusiness') {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": siteName,
            "image": fullImageUrl,
            "@id": appUrl,
            "url": appUrl,
            "telephone": "+6281111160600",
            "email": "info@edufa.co.id",
            "priceRange": "$$",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bandung",
                "addressRegion": "Jawa Barat",
                "addressCountry": "ID"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.9175,
                "longitude": 107.6191
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "16:00"
            },
            "medicalSpecialty": ["ClinicalPsychology", "OccupationalTherapy", "SpeechPathology"],
            "availableService": [
                { "@type": "MedicalTherapy", "name": "Asesmen Psikologi" },
                { "@type": "MedicalTherapy", "name": "Terapi Okupasi" },
                { "@type": "MedicalTherapy", "name": "Terapi Wicara" },
                { "@type": "MedicalTherapy", "name": "Konseling Psikologi" },
                { "@type": "EducationalOccupationalProgram", "name": "PAUD EDUfa Kids" }
            ]
        });
    }

    // BreadcrumbList schema
    if (breadcrumbs.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.url.startsWith('http') ? item.url : `${appUrl}${item.url}`
            }))
        });
    }

    // FAQPage schema
    if (faqItems.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        });
    }

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{defaultTitle}</title>
            <meta name="title" content={defaultTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content={robotsContent} />
            <meta name="language" content="Indonesian" />
            <meta name="revisit-after" content="7 days" />
            <meta name="author" content={author || siteName} />
            <meta name="generator" content="EDUfa Centre" />
            <meta name="rating" content="general" />
            <meta name="distribution" content="global" />
            <meta name="coverage" content="Worldwide" />
            <meta name="target" content="all" />
            <meta name="HandheldFriendly" content="True" />
            
            {/* Geo Tags */}
            <meta name="geo.region" content="ID-JB" />
            <meta name="geo.placename" content="Bandung" />
            <meta name="geo.position" content="-6.9175;107.6191" />
            <meta name="ICBM" content="-6.9175, 107.6191" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={schemaType === 'Article' ? 'article' : 'website'} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={defaultTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:alt" content={`${title} - ${siteName}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="id_ID" />
            <meta property="og:locale:alternate" content="en_US" />
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={pageUrl} />
            <meta name="twitter:title" content={defaultTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:image:alt" content={`${title} - ${siteName}`} />

            {/* Additional SEO */}
            <meta name="theme-color" content="#1a56db" />
            <meta name="apple-mobile-web-app-title" content={siteName} />
            <meta name="application-name" content={siteName} />
            <meta name="format-detection" content="telephone=yes" />

            {/* Canonical Link */}
            <link rel="canonical" href={pageUrl} />
            
            {/* Alternate / Hreflang */}
            <link rel="alternate" hrefLang="id" href={pageUrl} />
            <link rel="alternate" hrefLang="x-default" href={pageUrl} />

            {/* Structured Data / JSON-LD (multiple schemas) */}
            {schemas.map((schema, index) => (
                <script key={`schema-${index}`} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Head>
    );
}
