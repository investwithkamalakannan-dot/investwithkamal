(()=>{"use strict";
const C=window.IWK_CONFIG||{};
const inArticles=location.pathname.replace(/\\/g,'/').includes('/articles/');
const p=inArticles?'../':'';
const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
const active=inArticles?'articles.html':file;
const nav=[['index.html','Home'],['about-us.html','About Us'],['investment-plans.html','Investment Plans'],['sip.html','SIP'],['articles.html','Articles'],['my-services.html','My Services'],['contact.html','Contact Me']];
const mount=document.getElementById('siteHeader');
if(mount){
  mount.innerHTML=`<a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header sticky-top"><nav class="navbar navbar-expand-lg" aria-label="Main navigation"><div class="container-fluid site-shell">
  <a class="navbar-brand brand-lockup" href="${p}index.html" aria-label="InvestWithKamal home"><img src="${p}images/logo.png" alt="InvestWithKamal"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Open navigation"><span class="lumia-menu"><i></i><i></i><i></i></span></button>
  <div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav ms-auto align-items-lg-center">${nav.map(([href,label])=>`<li class="nav-item"><a class="nav-link ${active===href?'active':''}" href="${p+href}">${label}</a></li>`).join('')}</ul><a class="header-call d-none d-xl-flex" href="tel:${C.phoneInternational||'+918111079681'}"><span>CALL</span><strong>${C.phoneDisplay||'81110 79681'}</strong></a></div>
  </div></nav></header>`;
}
// Bootstrap bundle with local file first. This keeps every future page dependent on one common header loader.
if(!window.bootstrap && !document.querySelector('script[data-iwk-bootstrap]')){
  const s=document.createElement('script');s.src=p+'js/bootstrap.bundle.min.js';s.defer=true;s.dataset.iwkBootstrap='1';document.head.appendChild(s);
}
// Optional Google tag loader. Nothing is sent unless a real Measurement ID is configured.
const ga=(C.googleAnalyticsId||'').trim();
if(/^G-[A-Z0-9]+$/i.test(ga)){
  window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',ga);
  const g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(ga);document.head.appendChild(g);
}
})();
