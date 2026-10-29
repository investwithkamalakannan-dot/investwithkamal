/* =========================================================
   INVEST WITH KAMAL - COMMON HEADER
   https://www.investwithkamal.in/
   ========================================================= */

(function () {
    "use strict";

    const C = window.IWK_CONFIG || {};
    const currentPath = window.location.pathname.replace(/\\/g, "/").toLowerCase();
    const inArticles = currentPath.includes("/articles/");
    const BASE = inArticles ? "../" : "";
    const currentFile = (currentPath.split("/").pop() || "index.html").toLowerCase();
    const activePage = inArticles ? "articles.html" : currentFile;

    const PHONE = C.phoneInternational || "+918111079681";
    const DISPLAY_PHONE = C.phoneDisplay || "81110 79681";

    const headerTarget = document.getElementById("siteHeader");
    if (!headerTarget) return;

    const servicePages = [
        "my-services.html",
        "mutual-fund-investments.html",
        "health-insurance.html",
        "term-life-insurance.html",
        "corporate-fixed-deposits.html",
        "loan-against-mutual-funds.html",
        "national-pension-system.html"
    ];

    const isActive = (page) => activePage === page;
    const activeClass = (page) => isActive(page) ? " active" : "";
    const serviceActive = servicePages.includes(activePage);

    headerTarget.innerHTML = `
        <a class="skip-link" href="#main">Skip to content</a>

        <header class="iwk-header sticky-top">
            <nav class="navbar navbar-expand-lg iwk-navbar" aria-label="Main navigation">
                <div class="container-fluid iwk-nav-container">

                    <a class="navbar-brand iwk-brand"
                       href="${BASE}index.html"
                       aria-label="InvestWithKamal home">

                        <img
                            src="${BASE}images/favicon.png"
                            alt=""
                            class="iwk-brand-icon"
                            width="48"
                            height="48"
                            aria-hidden="true"
                        >

                        <span class="iwk-brand-copy">
                            <span class="iwk-brand-name">
                                <span class="iwk-invest">invest</span>
                                <span class="iwk-with">with</span>
                                <span class="iwk-kamal">Kamal</span>
                            </span>
                            <span class="iwk-brand-role">Mutual Fund Distributor</span>
                        </span>
                    </a>

                    <button
                        class="navbar-toggler iwk-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#iwkMainNavbar"
                        aria-controls="iwkMainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span></span><span></span><span></span>
                    </button>

                    <div class="collapse navbar-collapse" id="iwkMainNavbar">
                        <ul class="navbar-nav ms-auto align-items-lg-center iwk-nav-list">

                            <li class="nav-item">
                                <a class="nav-link${activeClass("index.html")}" href="${BASE}index.html">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link${activeClass("about-us.html")}" href="${BASE}about-us.html">About Us</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link${activeClass("investment-plans.html")}" href="${BASE}investment-plans.html">Investment Plans</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link${activeClass("sip.html")}" href="${BASE}sip.html">SIP</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link${activeClass("articles.html")}" href="${BASE}articles.html">Articles</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle${serviceActive ? " active" : ""}"
                                   href="#"
                                   id="servicesDropdown"
                                   role="button"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    My Services
                                </a>

                                <ul class="dropdown-menu dropdown-menu-end iwk-dropdown" aria-labelledby="servicesDropdown">
                                    <li><a class="dropdown-item${activeClass("my-services.html")}" href="${BASE}my-services.html">View All Services</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item${activeClass("mutual-fund-investments.html")}" href="${BASE}mutual-fund-investments.html">Mutual Fund Investments</a></li>
                                    <li><a class="dropdown-item${activeClass("health-insurance.html")}" href="${BASE}health-insurance.html">Health Insurance</a></li>
                                    <li><a class="dropdown-item${activeClass("term-life-insurance.html")}" href="${BASE}term-life-insurance.html">Term Life Insurance</a></li>
                                    <li><a class="dropdown-item${activeClass("corporate-fixed-deposits.html")}" href="${BASE}corporate-fixed-deposits.html">Fixed Deposits (FDs)</a></li>
                                    <li><a class="dropdown-item${activeClass("loan-against-mutual-funds.html")}" href="${BASE}loan-against-mutual-funds.html">Loan Against Mutual Funds</a></li>
                                    <li><a class="dropdown-item${activeClass("national-pension-system.html")}" href="${BASE}national-pension-system.html">National Pension System (NPS)</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link${activeClass("contact.html")}" href="${BASE}contact.html">Contact Me</a>
                            </li>
                        </ul>

                        <a class="iwk-header-call d-none d-xl-flex" href="tel:${PHONE}" aria-label="Call ${DISPLAY_PHONE}">
                            <span class="iwk-call-label">CALL</span>
                            <strong>${DISPLAY_PHONE}</strong>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    `;

    /* Load the bundled Bootstrap JS once. */
    if (!window.bootstrap && !document.querySelector("script[data-iwk-bootstrap]")) {
        const bootstrapScript = document.createElement("script");
        bootstrapScript.src = `${BASE}js/bootstrap.bundle.min.js`;
        bootstrapScript.defer = true;
        bootstrapScript.setAttribute("data-iwk-bootstrap", "true");
        document.head.appendChild(bootstrapScript);
    }

    /* Optional GA4. Leave googleAnalyticsId blank in site-config.js until configured. */
    const ga = String(C.googleAnalyticsId || "").trim();
    if (/^G-[A-Z0-9]+$/i.test(ga)) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
        window.gtag("js", new Date());
        window.gtag("config", ga);

        const gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(ga);
        document.head.appendChild(gaScript);
    }
})();
