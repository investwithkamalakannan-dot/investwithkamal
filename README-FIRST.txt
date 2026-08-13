INVESTWITHKAMAL — MAINTENANCE NOTES

Theme: Premium dark Lumia / Metro interface
Distributor: KAMALA KANNAN J
ARN: ARN-363054
Phone / WhatsApp: 81110 79681
Email: Investwithkamalakannan@gmail.com
Address: Pappampatti Pirivu, Coimbatore, Tamil Nadu 641103, India

COMMON FILES
- js/site-config.js : shared identity, phone, ARN, email, address, domain and optional Google Analytics ID
- js/header.js      : shared navigation + Bootstrap loader + optional Google tag loader
- js/footer.js      : shared footer, disclosure, contact dock and enquiry panel
- js/main.js        : animation, tile tilt, filters and WhatsApp enquiry behaviour
- css/style.css     : shared premium dark Lumia theme and responsive rules
- images/logo.png   : dark-background logo lockup
- images/logo-mark.png / favicon.png / favicon.ico : icon-only brand mark

BEFORE PRODUCTION
1. Replace https://YOUR-DOMAIN-HERE in canonical URLs, Open Graph URLs and sitemaps.
2. Add a Google Analytics Measurement ID only if analytics/consent configuration is approved.
3. Review all legal/disclosure pages against the client’s current registrations and requirements.
4. Validate structured data, canonical URLs, sitemap and robots.txt after the final domain is known.

When adding a new page, copy an existing page of the same type and keep these shared scripts at the end of <body>:
js/site-config.js, js/header.js, js/footer.js, js/main.js (use ../ prefix inside /articles/).
