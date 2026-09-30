/* Monta a página a partir de js/content.js e cuida das transições entre telas. */
(function () {
  const S = window.SITE;
  const key = document.body.dataset.page;
  const page = S.pages[key];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const icons = {
    instagram: '<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6"/></svg>',
    youtube: '<svg class="icon" viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/></svg>',
    tiktok: '<svg class="icon" viewBox="0 0 24 24"><path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4c.4 2.6 2 4.1 4.5 4.3"/></svg>',
    mail: '<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>'
  };
  const socials = (list) => list.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${n}">${icons[n]}</a>`).join("");

  const nav = S.nav.map((n) => `<a class="navlink" data-link href="${n.href}"${n.href.startsWith(key === "index" ? "index" : key) ? ' aria-current="page"' : ""}>${n.label}</a>`).join("");
  const cards = page.cards.map((c) => `
    <figure class="card">
      <img src="${esc(c.img)}" alt="${esc(c.caption || S.name)}">
      ${c.caption !== undefined ? `<figcaption style="white-space:pre-line">${esc(c.caption)}</figcaption>` : ""}
    </figure>`).join("");

  document.getElementById("app").innerHTML = `
    <header class="topbar">
      <a class="brand" data-link href="index.html">${esc(S.name)}</a>
      <nav class="topnav">${nav}<span class="social">${socials([["instagram", S.instagram]])}</span></nav>
    </header>
    <div class="page">
      <aside class="side">
        <img class="avatar" src="${esc(S.avatar)}" alt="${esc(S.name)}">
        <div class="name">${esc(S.name)}</div>
        <div class="role">${esc(S.role)}</div>
        <div class="tagline">${esc(S.tagline)}</div>
        <div class="social">${socials([["instagram", S.instagram], ["youtube", S.youtube], ["tiktok", S.tiktok], ["mail", S.email]])}</div>
      </aside>
      <main class="gallery ${key === "index" ? "gallery--home" : key === "portfolio" ? "gallery--grid" : "gallery--single"}">${cards}</main>
      <section class="text">
        <h1>${esc(page.title)}</h1>
        ${page.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
        <div class="tags">${page.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </section>
    </div>`;

  // Transições entre telas
  document.body.classList.add("is-entering");
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-link]");
    if (!a || e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    document.body.classList.remove("is-entering");
    document.body.classList.add("is-leaving");
    setTimeout(() => (location.href = a.href), 450);
  });
  window.addEventListener("pageshow", (e) => { if (e.persisted) document.body.classList.remove("is-leaving"); });

})();
