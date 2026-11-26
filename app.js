(() => {
  "use strict";
  const D = window.PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const byId = Object.fromEntries(D.items.map((it) => [it.id, it]));
  const isMobile = () => matchMedia("(max-width: 760px)").matches;
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ================= Cover generator ================= */
  let uid = 0;
  function cover(c = {}, label = "") {
    if (c.src) return `<img src="${esc(c.src)}" alt="" loading="lazy" draggable="false">`;
    const [a = "#222", b = "#eee"] = c.colors || [];
    const id = "g" + uid++;
    let inner = "";
    switch (c.kind) {
      case "orb":
        inner = `<defs><radialGradient id="${id}" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="${b}"/><stop offset=".75" stop-color="${b}" stop-opacity=".9"/><stop offset="1" stop-color="${b}" stop-opacity="0"/></radialGradient></defs>
          <rect width="100" height="100" fill="${a}"/><circle cx="50" cy="50" r="34" fill="url(#${id})"/>`;
        break;
      case "spiral": {
        let rings = "";
        for (let r = 48; r > 0; r -= 6) rings += `<circle cx="50" cy="50" r="${r}" fill="${(r / 6) % 2 ? a : b}"/>`;
        inner = `<rect width="100" height="100" fill="${a}"/>${rings}`;
        break;
      }
      case "type":
        inner = `<rect width="100" height="100" fill="${a}"/><text x="50" y="54" text-anchor="middle" dominant-baseline="middle" font-family="Archivo, Pretendard, sans-serif" font-weight="800" font-size="${(c.text || "A").length > 1 ? 40 : 64}" fill="${b}">${esc(c.text || "A")}</text>`;
        break;
      case "stripes":
        inner = `<defs><pattern id="${id}" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="14" height="14" fill="${a}"/><rect width="6" height="14" fill="${b}"/></pattern></defs><rect width="100" height="100" fill="url(#${id})"/>`;
        break;
      case "grid": {
        let d = "";
        for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) d += `<circle cx="${14 + x * 18}" cy="${14 + y * 18}" r="${3 + ((x + y) % 3) * 2}" fill="${b}" opacity="${0.4 + ((x * y) % 4) * 0.2}"/>`;
        inner = `<rect width="100" height="100" fill="${a}"/>${d}`;
        break;
      }
      case "blob":
        inner = `<defs><filter id="${id}"><feGaussianBlur stdDeviation="6"/></filter></defs><rect width="100" height="100" fill="${b}"/>
          <g filter="url(#${id})"><circle cx="38" cy="42" r="26" fill="${a}"/><circle cx="66" cy="64" r="20" fill="${a}" opacity=".7"/></g>`;
        break;
      case "wave": {
        let p = "";
        for (let i = 0; i < 9; i++) p += `<path d="M-5 ${12 + i * 10} Q25 ${2 + i * 10} 50 ${12 + i * 10} T105 ${12 + i * 10}" stroke="${b}" stroke-width="${1 + (i % 3)}" fill="none"/>`;
        inner = `<rect width="100" height="100" fill="${a}"/>${p}`;
        break;
      }
      case "slides":
        inner = `<rect width="100" height="100" fill="${a}"/>
          <rect x="22" y="18" width="62" height="40" rx="2" fill="${b}" opacity=".35"/>
          <rect x="16" y="26" width="62" height="40" rx="2" fill="${b}" opacity=".6"/>
          <rect x="10" y="34" width="62" height="40" rx="2" fill="${b}"/>
          <rect x="16" y="42" width="30" height="5" fill="${a}"/><rect x="16" y="51" width="44" height="3" fill="${a}" opacity=".5"/><rect x="16" y="57" width="38" height="3" fill="${a}" opacity=".5"/>`;
        break;
      case "folder":
      default:
        inner = `<rect width="100" height="100" fill="${b}"/><path d="M14 30h26l6 6h40v42H14z" fill="${a}"/>`;
    }
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;
  }

  /* ================= Hero / chrome ================= */
  const hero = $("#hero");
  hero.style.backgroundImage = `url("${D.hero.image}")`;
  hero.style.setProperty("--hero-blur", (D.hero.blur ?? 16) + "px");
  requestAnimationFrame(() => hero.classList.add("is-in"));

  $("#ownerName").textContent = `${D.owner.name} — Portfolio`;
  document.title = `${D.owner.name} — Portfolio`;
  const clock = $("#clock");
  const tick = () => {
    const d = new Date();
    clock.textContent = d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }) + "  " +
      d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  };
  tick(); setInterval(tick, 30000);

  /* ================= Desktop icons ================= */
  const desktop = $("#desktop");
  const POS_KEY = "portfolio-icon-pos";
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(POS_KEY) || "{}"); } catch {}

  D.items.forEach((it, i) => {
    const pos = saved[it.id] || { x: it.x, y: it.y };
    const el = document.createElement("button");
    el.className = "icon is-hidden";
    el.dataset.id = it.id;
    el.style.left = pos.x + "%";
    el.style.top = pos.y + "%";
    el.innerHTML = `<span class="icon__thumb">${cover(it.cover, it.label)}</span><span class="icon__label">${esc(it.label)}</span>`;
    desktop.appendChild(el);
    it._el = el; it._pos = { ...pos };

    // intro: fly out from centre
    if (!isMobile()) {
      const w = desktop.clientWidth, h = desktop.clientHeight;
      el.style.transform = `translate(${((50 - pos.x) / 100) * w}px, ${((45 - pos.y) / 100) * h}px) scale(.3)`;
    }
    setTimeout(() => { el.classList.remove("is-hidden"); el.style.transform = ""; }, 350 + i * 45);

    enableIconDrag(el, it);
    el.addEventListener("click", () => {
      if (el.dataset.dragged === "1") { el.dataset.dragged = ""; return; }
      select(el);
      openItem(it.id);
    });
  });

  function select(el) {
    desktop.querySelectorAll(".is-selected").forEach((n) => n.classList.remove("is-selected"));
    el && el.classList.add("is-selected");
  }
  desktop.addEventListener("pointerdown", (e) => { if (e.target === desktop) select(null); });

  function enableIconDrag(el, it) {
    let start = null;
    el.addEventListener("pointerdown", (e) => {
      if (isMobile() || e.button !== 0) return;
      start = { px: e.clientX, py: e.clientY, x: it._pos.x, y: it._pos.y, moved: false };
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener("pointermove", (e) => {
      if (!start) return;
      const dx = e.clientX - start.px, dy = e.clientY - start.py;
      if (!start.moved && Math.hypot(dx, dy) < 5) return;
      start.moved = true;
      el.classList.add("is-dragging");
      const x = Math.min(98, Math.max(2, start.x + (dx / desktop.clientWidth) * 100));
      const y = Math.min(92, Math.max(1, start.y + (dy / desktop.clientHeight) * 100));
      it._pos = { x, y };
      el.style.left = x + "%"; el.style.top = y + "%";
    });
    const end = () => {
      if (!start) return;
      if (start.moved) {
        el.dataset.dragged = "1";
        el.classList.remove("is-dragging");
        saved[it.id] = it._pos;
        try { localStorage.setItem(POS_KEY, JSON.stringify(saved)); } catch {}
      }
      start = null;
    };
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);
  }

  /* ================= Window manager ================= */
  const layer = $("#windows");
  const wins = new Map(); // rootId -> {el, stack}
  let z = 10, cascade = 0;

  function openItem(id) {
    const it = byId[id];
    if (!it) return;
    if (wins.has(id)) { focus(wins.get(id).el); return; }

    const el = document.createElement("section");
    el.className = "win";
    el.setAttribute("role", "dialog");
    el.innerHTML = `
      <div class="win__bar">
        <button class="win__dot win__dot--close" aria-label="닫기"></button>
        <button class="win__dot win__dot--min" aria-label="닫기"></button>
        <button class="win__dot win__dot--max" aria-label="최대화"></button>
        <button class="win__back" hidden>‹ 뒤로</button>
        <span class="win__title"></span>
      </div>
      <div class="win__body"></div>`;
    layer.appendChild(el);

    const w = el.offsetWidth, h = el.offsetHeight;
    const n = cascade++ % 6;
    el.style.left = Math.max(16, (innerWidth - w) / 2 - 60 + n * 28) + "px";
    el.style.top = Math.max(40, (innerHeight - 110 - h) / 2 - 20 + n * 24) + "px";

    const state = { el, stack: [] };
    wins.set(id, state);
    el.dataset.root = id;

    $(".win__dot--close", el).onclick = () => closeWin(id);
    $(".win__dot--min", el).onclick = () => closeWin(id);
    $(".win__dot--max", el).onclick = () => el.classList.toggle("is-max");
    $(".win__back", el).onclick = () => { state.stack.pop(); renderInto(state); };
    el.addEventListener("pointerdown", () => focus(el));
    enableWinDrag(el);

    state.stack.push(it);
    renderInto(state);
    focus(el);
    syncDock();
    history.replaceState(null, "", "#/" + id);
  }

  function renderInto(state) {
    const it = state.stack[state.stack.length - 1];
    const el = state.el;
    $(".win__title", el).textContent = it.label;
    $(".win__back", el).hidden = state.stack.length < 2;
    el.classList.toggle("win--slides", it.type === "slides");
    const body = $(".win__body", el);
    body.innerHTML = "";
    body.scrollTop = 0;
    (renderers[it.type] || renderers.detail)(it, body, (childId) => {
      state.stack.push(byId[childId]);
      renderInto(state);
    });
  }

  function closeWin(id) {
    const s = wins.get(id);
    if (!s) return;
    wins.delete(id);
    s.el.classList.add("is-closing");
    setTimeout(() => s.el.remove(), 200);
    syncDock();
    if (!wins.size) history.replaceState(null, "", location.pathname);
  }
  const closeAll = () => [...wins.keys()].forEach(closeWin);

  function focus(el) { el.style.zIndex = ++z; }

  function enableWinDrag(el) {
    const bar = $(".win__bar", el);
    let s = null;
    bar.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button") || isMobile() || el.classList.contains("is-max")) return;
      s = { px: e.clientX, py: e.clientY, l: el.offsetLeft, t: el.offsetTop };
      bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener("pointermove", (e) => {
      if (!s) return;
      el.style.left = Math.min(innerWidth - 80, Math.max(-el.offsetWidth + 120, s.l + e.clientX - s.px)) + "px";
      el.style.top = Math.min(innerHeight - 60, Math.max(0, s.t + e.clientY - s.py)) + "px";
    });
    bar.addEventListener("pointerup", () => (s = null));
    bar.addEventListener("dblclick", (e) => { if (!e.target.closest("button")) el.classList.toggle("is-max"); });
  }

  addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || !wins.size) return;
    let top = null, topZ = -1;
    wins.forEach((s, id) => { const zz = +s.el.style.zIndex || 0; if (zz > topZ) { topZ = zz; top = id; } });
    closeWin(top);
  });

  /* ================= Renderers ================= */
  const html = (strings, ...vals) => strings.reduce((a, s, i) => a + s + (vals[i] ?? ""), "");
  const tagsHTML = (tags) => (tags && tags.length ? `<div class="tags">${tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : "");
  const linksHTML = (links) =>
    links && links.length
      ? `<div class="btns">${links.map((l, i) => `<a class="btn ${i ? "btn--ghost" : ""}" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>`
      : "";

  const renderers = {
    profile(it, body) {
      body.innerHTML = html`
        <div class="profile">
          <div class="profile__img">${cover(it.photo ? { src: it.photo } : it.cover)}</div>
          <div>
            <p class="h-eyebrow">${esc(D.owner.role)}</p>
            <h1 class="h-title">${esc(D.owner.name)}</h1>
            <p class="p">${esc(it.bio)}</p>
            <dl class="facts">${(it.facts || []).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
            <p class="h-eyebrow">Tools</p>
            ${tagsHTML(it.skills)}
            <div class="btns">
              <a class="btn" href="mailto:${esc(D.owner.email)}">메일 보내기</a>
              <a class="btn btn--ghost" href="${esc(D.owner.instagram)}" target="_blank" rel="noopener">Instagram ↗</a>
            </div>
          </div>
        </div>`;
    },

    folder(it, body, push) {
      const kids = D.items.filter((x) => x.category === it.category && x.type !== "folder");
      body.innerHTML = html`
        <p class="h-eyebrow">${kids.length} items</p>
        <h1 class="h-title">${esc(it.label)}</h1>
        <div class="grid">
          ${kids.map((k) => `<button class="card" data-id="${k.id}"><div class="card__thumb">${cover(k.cover)}</div><div class="card__title">${esc(k.label)}</div><div class="card__meta">${esc(k.meta || "")}</div></button>`).join("")}
        </div>`;
      body.querySelectorAll(".card").forEach((b) => (b.onclick = () => push(b.dataset.id)));
    },

    list(it, body) {
      body.innerHTML = html`
        <p class="h-eyebrow">Timeline</p>
        <h1 class="h-title">${esc(it.label)}</h1>
        <ul class="timeline">
          ${(it.entries || []).map((e) => `<li><span class="timeline__year">${esc(e.year)}</span><div><div class="timeline__title">${esc(e.title)}</div><div class="timeline__note">${esc(e.note || "")}</div></div></li>`).join("")}
        </ul>`;
    },

    detail(it, body) {
      body.innerHTML = html`
        <div class="detail__cover">${cover(it.hero ? { src: it.hero } : it.cover)}</div>
        <p class="h-eyebrow">${esc(it.meta || "")}</p>
        <h1 class="h-title">${esc(it.label)}</h1>
        ${tagsHTML(it.tags)}
        <p class="p">${esc(it.description || "")}</p>
        ${it.images && it.images.length ? `<div class="gallery">${it.images.map((s) => `<img src="${esc(s)}" alt="" loading="lazy">`).join("")}</div>` : ""}
        ${linksHTML(it.links)}`;
    },

    slides(it, body) {
      const imgs = it.slides || [];
      body.innerHTML = html`
        <div class="slides">
          <div>
            <p class="h-eyebrow">${esc(it.meta || "Presentation")}</p>
            <h1 class="h-title" style="font-size:26px;margin:0">${esc(it.label)}</h1>
          </div>
          <div class="slides__stage"></div>
          <div class="slides__nav">
            <button class="btn btn--ghost" data-dir="-1">← 이전</button>
            <span class="slides__count"></span>
            <button class="btn btn--ghost" data-dir="1">다음 →</button>
          </div>
        </div>`;
      const stage = $(".slides__stage", body), count = $(".slides__count", body), nav = $(".slides__nav", body);
      if (it.pdf) {
        stage.innerHTML = `<iframe src="${esc(it.pdf)}" title="${esc(it.label)}"></iframe>`;
        nav.innerHTML = `<a class="btn" href="${esc(it.pdf)}" target="_blank" rel="noopener">PDF 새 탭에서 열기 ↗</a>`;
        return;
      }
      const total = imgs.length || 4;
      const [a = "#111", b = "#fff"] = (it.cover && it.cover.colors) || [];
      const ph = (i) => `<div class="slides__ph"><svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="90" fill="${a}"/><rect x="12" y="14" width="${i ? 60 : 110}" height="${i ? 8 : 14}" fill="${b}"/>
          <rect x="12" y="${i ? 30 : 36}" width="80" height="3" fill="${b}" opacity=".5"/>
          <rect x="12" y="${i ? 37 : 43}" width="66" height="3" fill="${b}" opacity=".5"/>
          ${i ? `<rect x="100" y="30" width="48" height="46" fill="${b}" opacity=".25"/>` : ""}
          <text x="148" y="82" text-anchor="end" font-size="5" fill="${b}" opacity=".6" font-family="Pretendard,sans-serif">data.js 에 slides 이미지를 추가하세요</text></svg></div>`;
      let i = 0;
      const show = () => {
        stage.innerHTML = imgs.length ? `<img src="${esc(imgs[i])}" alt="slide ${i + 1}">` : ph(i);
        count.textContent = `${i + 1} / ${total}`;
      };
      nav.querySelectorAll("[data-dir]").forEach((b) => (b.onclick = () => { i = (i + +b.dataset.dir + total) % total; show(); }));
      show();
    },

    contact(it, body) {
      body.innerHTML = html`
        <p class="h-eyebrow">Get in touch</p>
        <h1 class="h-title">Let's work together</h1>
        <p class="p">프로젝트 협업, 외주, 채용 문의는 아래 메일로 연락주세요.</p>
        <p class="contact-big"><a href="mailto:${esc(D.owner.email)}">${esc(D.owner.email)}</a></p>
        <div class="btns">
          <a class="btn" href="mailto:${esc(D.owner.email)}">메일 보내기</a>
          <a class="btn btn--ghost" href="${esc(D.owner.instagram)}" target="_blank" rel="noopener">Instagram ↗</a>
        </div>`;
    },
  };

  /* ================= Dock ================= */
  const G = {
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.5-6.5 8-6.5s7 2 8 6.5"/>',
    grid: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>',
    flag: '<path d="M5 21V4M5 4h12l-2.5 4L17 12H5"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    slides: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8M7 12l3-3 2 2 4-4"/>',
    doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    camera: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".8" fill="currentColor"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5L12 13l8.5-6.5"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14M10 11v6M14 11v6"/>',
  };
  const lum = (hex) => {
    const n = parseInt(hex.replace("#", "").padEnd(6, "f").slice(0, 6), 16);
    return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  };
  const dock = $("#dock");
  D.dock.forEach((d) => {
    if (d === "sep") { dock.insertAdjacentHTML("beforeend", '<span class="dock__sep"></span>'); return; }
    const b = document.createElement("button");
    b.className = "dock__item";
    b.dataset.label = d.label;
    b.setAttribute("aria-label", d.label);
    if (d.open) b.dataset.open = d.open;
    const [c1, c2] = d.colors;
    b.style.background = `linear-gradient(160deg, ${c2}, ${c1})`;
    b.style.color = lum(c1) > 0.7 ? "#3a3a3c" : "#fff";
    b.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${G[d.icon] || G.grid}</svg>`;
    b.onclick = () => {
      if (d.action === "closeAll") return closeAll();
      if (d.href) {
        const url = d.href.startsWith("owner.") ? D.owner[d.href.slice(6)] : d.href;
        return window.open(url, "_blank", "noopener");
      }
      openItem(d.open);
    };
    dock.appendChild(b);
  });
  function syncDock() {
    dock.querySelectorAll("[data-open]").forEach((b) => b.classList.toggle("is-open", wins.has(b.dataset.open)));
  }

  /* ================= Deep link ================= */
  const fromHash = location.hash.replace(/^#\/?/, "");
  if (fromHash && byId[fromHash]) setTimeout(() => openItem(fromHash), 900);
})();
