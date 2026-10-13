/* Monta a página a partir de js/content.js, cuida das transições, do lightbox e das animações de entrada. */
(function () {
  const S = window.SITE;
  const key = document.body.dataset.page;
  const page = S.pages[key];
  const FALLBACK = "assets/images/placeholder.svg";

  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const title = (t) => esc(t).replace(/\*(.+?)\*/g, "<em>$1</em>");
  const link = (h) => ({ WHATSAPP: S.whatsapp, MAILTO: "mailto:" + S.email, INSTAGRAM: S.instagram }[h] || h);
  const val = (v) => (v === "EMAIL" ? S.email : v);
  const img = (src, alt, cls = "") => `<img ${cls ? `class="${cls}" ` : ""}src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK}'">`;

  const icons = {
    instagram: '<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  const nav = S.nav.map((n) => `<a class="navlink" data-link href="${n.href}"${n.href === key + ".html" ? ' aria-current="page"' : ""}>${n.label}</a>`).join("");
  const btn = (c) => `<a class="btn btn--${c.style || "solid"}" ${c.href === "WHATSAPP" || /^https?:/.test(link(c.href)) ? 'target="_blank" rel="noopener"' : "data-link"} href="${esc(link(c.href))}">${esc(c.label)}${icons.arrow}</a>`;

  const wave = `<div class="wave"><svg viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 96 C320 20 860 170 1440 40" fill="none" stroke="#A9885D" stroke-opacity=".55" stroke-width="3" vector-effect="non-scaling-stroke"/>
    <path d="M0 112 C320 36 860 186 1440 58" fill="none" stroke="#A9885D" stroke-opacity=".3" stroke-width="7" vector-effect="non-scaling-stroke"/>
    <path d="M0 128 C320 52 860 202 1440 76 L1440 160 L0 160Z" fill="#F7F4EC"/></svg></div>`;

  const cards = (page.cards || []).map((c) => `<figure class="card">${img(c.img, c.caption || S.name)}${c.caption ? `<figcaption>${esc(c.caption)}</figcaption>` : ""}</figure>`).join("");

  const hero = `
    <section class="hero${page.cards ? "" : " hero--text"}">
      <img class="hero__mark" src="assets/brand/simbolo-branco.png" alt="">
      <div class="hero__grid">
        <div class="hero__text">
          <span class="eyebrow reveal">${esc(page.eyebrow)}</span>
          <h1 class="reveal" style="--d:.08s">${title(page.title)}</h1>
          <p class="lead reveal" style="--d:.16s">${esc(page.lead)}</p>
          ${page.ctas ? `<div class="actions reveal" style="--d:.24s">${page.ctas.map(btn).join("")}</div>` : ""}
        </div>
        ${page.cards ? `<div class="gallery ${page.cards.length > 1 ? "gallery--home" : "gallery--single"} reveal" style="--d:.2s">${cards}</div>` : ""}
      </div>
      ${wave}
    </section>`;

  const sec = page.section;
  let body = "";
  if (sec.type === "bio") {
    body = `<section class="section"><div class="section__in bio">
      ${img(S.avatar, S.name, "avatar reveal")}
      <div class="bio__text"><h2 class="reveal">${esc(sec.title)}</h2>
        ${sec.paragraphs.map((p, i) => `<p class="reveal" style="--d:${0.06 * (i + 1)}s">${esc(p)}</p>`).join("")}
        <div class="tags reveal">${sec.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div></div></div></section>`;
  } else if (sec.type === "list") {
    body = `<section class="section"><div class="section__in"><h2 class="reveal">${esc(sec.title)}</h2><div class="grid-3">
      ${sec.items.map((it, i) => `<div class="item reveal" style="--d:${0.08 * i}s"><small>${esc(it.n)}</small><h3>${esc(it.title)}</h3><p>${esc(it.text)}</p></div>`).join("")}</div></div></section>`;
  } else if (sec.type === "contact") {
    body = `<section class="section"><div class="section__in"><h2 class="reveal">${esc(sec.title)}</h2><div class="grid-3">
      ${sec.items.map((it, i) => `<a class="item reveal" style="--d:${0.08 * i}s" target="_blank" rel="noopener" href="${esc(link(it.href))}"><small>${esc(it.label)}</small><h3>${esc(val(it.value))}</h3></a>`).join("")}</div></div></section>`;
  } else if (sec.type === "portfolio") {
    body = `<section class="section"><div class="section__in"><div class="portfolio-grid">
      ${PORTFOLIO_PHOTOS.map((p, i) => `<button class="work reveal" type="button" style="--d:${0.04 * (i % 5)}s" data-full="${esc(PORTFOLIO_FOLDER + p.file)}" aria-label="Ampliar foto: ${esc(p.label)}">${img(PORTFOLIO_FOLDER + p.file, p.label)}<span>${esc(p.label)}</span></button>`).join("")}</div></div></section>`;
  }

  const cta = page.cta ? `<section class="cta-band"><h2 class="reveal">${esc(page.cta.title)}</h2><p class="reveal">${esc(page.cta.text)}</p><div class="actions reveal">${btn({ label: page.cta.label, href: page.cta.href, style: "solid" })}</div></section>` : "";

  const footer = `<footer class="footer"><div class="footer__in">
    <a data-link href="index.html"><img src="assets/brand/logo-branco.png" alt="${esc(S.name)} Fotografia"></a>
    <nav>${S.nav.map((n) => `<a data-link href="${n.href}">${n.label}</a>`).join("")}</nav>
    <div class="social"><a href="${esc(S.instagram)}" target="_blank" rel="noopener" aria-label="Instagram">${icons.instagram}</a></div>
    <small>© ${new Date().getFullYear()} ${esc(S.name)} Fotografia. Todos os direitos reservados.</small></div></footer>`;

  document.getElementById("app").innerHTML = `
    <header class="topbar">
      <a class="brand" data-link href="index.html" aria-label="${esc(S.name)} Fotografia, início"><img src="assets/brand/logo-areia-creme.png" alt="${esc(S.name)} Fotografia"></a>
      <nav class="topnav">${nav}<span class="social"><a href="${esc(S.instagram)}" target="_blank" rel="noopener" aria-label="Instagram">${icons.instagram}</a></span></nav>
    </header>
    <main>${hero}${body}${cta}</main>${footer}
    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true"><button type="button" aria-label="Fechar">×</button><img alt=""></div>`;

  /* Transição entre telas */
  document.body.classList.add("is-entering");
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-link]");
    if (!a || e.metaKey || e.ctrlKey || document.documentElement.classList.contains("intro-active")) return;
    e.preventDefault();
    document.body.classList.remove("is-entering");
    document.body.classList.add("is-leaving");
    setTimeout(() => (location.href = a.href), 450);
  });
  window.addEventListener("pageshow", (e) => { if (e.persisted) document.body.classList.remove("is-leaving"); });

  /* Lightbox do portfólio */
  const lb = document.getElementById("lightbox"), lbImg = lb.querySelector("img");
  const closeLb = () => lb.classList.remove("is-open");
  document.querySelectorAll(".work").forEach((b) => b.addEventListener("click", () => {
    lbImg.onerror = () => { lbImg.onerror = null; lbImg.src = FALLBACK; };
    lbImg.src = b.dataset.full; lb.classList.add("is-open");
  }));
  lb.addEventListener("click", closeLb);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

  /* Animações de entrada ao rolar (começam depois da abertura com vídeo) */
  const start = () => {
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  };
  if (document.documentElement.classList.contains("intro-active")) window.addEventListener("intro:done", start, { once: true });
  else start();
})();
