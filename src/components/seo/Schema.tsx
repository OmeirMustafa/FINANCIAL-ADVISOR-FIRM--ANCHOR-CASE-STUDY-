import Script from "next/script";

export function Schema() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "Anchor Capital Advisors",
        "image": "https://anchor-capital-concept.vercel.app/logo.png",
        "description": "Fiduciary wealth management for tech founders and post-exit entrepreneurs. Specialized in tax mitigation and concentration risk.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 West 57th Street, Floor 18",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10019",
            "addressCountry": "US"
        },
        "priceRange": "$$$",
        "telephone": "+1-212-555-0123",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
            }
        ]
    };

    return (
        <Script id="schema-structured-data" type="application/ld+json">
            {JSON.stringify(schemaData)}
        </Script>
    );
}
