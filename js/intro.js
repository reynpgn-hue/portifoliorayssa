/* Abertura: o vídeo roda em tela cheia e, quando o símbolo fica parado, diminui até o logo do canto superior esquerdo. */
(function () {
  const root = document.documentElement;
  if (!root.classList.contains("intro-active")) return;

  /* Posição do símbolo no quadro final do vídeo (frações do vídeo). Ajuste só se trocar o vídeo. */
  const SYM = { cx: 0.486, cy: 0.4575, h: 0.758 };
  const LOGO_SYM = { cx: 0.1522, cy: 0.4593, h: 0.756 }; // símbolo dentro de logo-areia-creme.png
  const SYM_ASPECT = 369 / 405;
  const ASPECT = 1920 / 704;
  const SHRINK_AT = 15.6; // segundos: momento em que o símbolo está inteiro e parado

  const box = document.createElement("div");
  box.className = "intro";
  box.innerHTML = `<div class="intro__stage"><video class="intro__video" muted playsinline autoplay preload="auto"><source src="assets/video/intro.mp4" type="video/mp4"><source src="assets/video/intro.webm" type="video/webm"></video></div>
    <div class="intro__ui"><button type="button" data-sound>Ativar som</button><button type="button" data-skip>Pular</button></div>`;
  document.body.appendChild(box);
  root.classList.add("intro-ready");

  const v = box.querySelector("video");
  let done = false;

  const end = () => {
    root.classList.remove("intro-active");
    root.classList.add("intro-done");
    box.remove();
    window.dispatchEvent(new Event("intro:done"));
  };

  function finish(skip) {
    if (done) return;
    done = true;
    try { sessionStorage.setItem("introDone", "1"); } catch (e) {}
    if (skip) { box.classList.add("is-fading"); root.classList.remove("intro-active"); return setTimeout(end, 600); }

    const logo = document.querySelector(".brand img");
    const r = logo.getBoundingClientRect();
    const vw = innerWidth, vh = innerHeight;
    const ar = v.videoWidth && v.videoHeight ? v.videoWidth / v.videoHeight : ASPECT;
    const rh = Math.min(vh, vw / ar), rw = rh * ar;

    /* Símbolo (png transparente) exatamente sobre o símbolo do vídeo... */
    const h0 = SYM.h * rh, w0 = h0 * SYM_ASPECT;
    const l0 = vw / 2 + (SYM.cx - 0.5) * rw - w0 / 2, t0 = vh / 2 + (SYM.cy - 0.5) * rh - h0 / 2;
    /* ...e o destino: o símbolo dentro do logo do topo. */
    const h1 = LOGO_SYM.h * r.height, w1 = h1 * SYM_ASPECT;
    const l1 = r.left + LOGO_SYM.cx * r.width - w1 / 2, t1 = r.top + LOGO_SYM.cy * r.height - h1 / 2;

    const fly = document.createElement("div");
    fly.className = "intro__fly";
    fly.style.cssText = `left:${l0}px;top:${t0}px;width:${w0}px;height:${h0}px`;
    fly.innerHTML = '<img class="a" src="assets/brand/simbolo-colorido-recorte.png" alt=""><img class="b" src="assets/brand/simbolo-areia-recorte.png" alt="">';
    document.body.appendChild(fly);
    v.style.transition = "none"; v.style.opacity = "0"; // o png assume no mesmo quadro
    box.classList.add("is-shrinking");
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fly.style.transform = `translate(${l1 - l0}px, ${t1 - t0}px) scale(${h1 / h0})`;
      fly.classList.add("is-landing");
    }));
    setTimeout(() => root.classList.remove("intro-active"), 850); // logo do topo aparece
    setTimeout(end, 1000);
    setTimeout(() => { fly.style.opacity = "0"; }, 1150);
    setTimeout(() => fly.remove(), 1600);
  }

  v.addEventListener("timeupdate", () => { if (v.currentTime >= SHRINK_AT) finish(false); });
  v.addEventListener("ended", () => finish(false));
  v.querySelector("source:last-child").addEventListener("error", () => finish(true));
  v.addEventListener("error", () => finish(true));
  const p = v.play(); if (p && p.catch) p.catch(() => finish(true));
  setTimeout(() => finish(true), 30000);

  box.querySelector("[data-skip]").addEventListener("click", () => finish(true));
  const snd = box.querySelector("[data-sound]");
  snd.addEventListener("click", () => { v.muted = !v.muted; snd.textContent = v.muted ? "Ativar som" : "Desativar som"; v.play(); });
})();
