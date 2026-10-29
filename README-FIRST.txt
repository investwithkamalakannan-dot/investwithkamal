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

PRODUCTION STATUS
1. Production domain configured: https://www.investwithkamal.in/
2. Canonical URLs, Open Graph URLs, schema, robots.txt and XML sitemaps use the production domain.
3. Google Analytics is intentionally blank until a GA4 Measurement ID is supplied and consent/configuration is approved.
4. Review legal/disclosure pages whenever the client’s registrations, provider arrangements or regulatory requirements change.
5. Revalidate structured data and sitemap after future structural changes.

When adding a new page, copy an existing page of the same type and keep these shared scripts at the end of <body>:
js/site-config.js, js/header.js, js/footer.js, js/main.js (use ../ prefix inside /articles/).
