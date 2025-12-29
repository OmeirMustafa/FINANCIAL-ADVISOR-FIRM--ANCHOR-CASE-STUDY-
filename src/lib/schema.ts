export function generateSchema() {
    return {
        "@context": "https://schema.org",
        "@type": ["FinancialService", "LocalBusiness"],
        "name": "Anchor Capital Advisors",
        "description": "Fiduciary wealth management for tech founders and post-exit entrepreneurs. Specialized in tax mitigation and concentration risk.",
        "url": "https://anchor-capital.com",
        "telephone": "+1-415-555-0123",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 Pine Street, Suite 1250",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94111",
            "addressCountry": "US"
        },
        "priceRange": "$$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
            }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.7915,
            "longitude": -122.3995
        },
        "sameAs": [
            "https://www.linkedin.com/company/anchor-capital-example",
            "https://twitter.com/anchor_capital"
        ]
    };
}
