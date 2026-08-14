/* ════════════════════════════════════════════════════════════════
   DETAIL PAGE RENDERER
   ────────────────────────────────────────────────────────────────
   Reads ?slug=... from the URL, looks it up in GAMES (games-data.js),
   and builds the case-study page. Runs before script.js, so by the
   time script.js runs (slider dots, lightbox binding, hamburger),
   all the markup below already exists in the DOM.
   ════════════════════════════════════════════════════════════════ */

(function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const game = (typeof getGameBySlug === 'function') ? getGameBySlug(slug) : null;

  const root = document.getElementById('game-detail-root');
  const navEl = document.getElementById('detail-prev-next');
  if (!root) return;

  if (!game) {
    document.title = 'Game not found — Ivan Tesorero';
    root.innerHTML = `
      <div class="not-found">
        <p class="section-label">404</p>
        <h1>Couldn't find that game</h1>
        <p>It may have been renamed or removed.</p>
        <br>
        <a href="index.html#games">&larr; Back to all games</a>
      </div>
    `;
    return;
  }

  document.title = `${game.name} — Ivan Tesorero`;
  root.innerHTML = gameMarkup(game);
  if (navEl) navEl.innerHTML = prevNextMarkup(game);

  // ── helpers ──

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function slidesFor(g) {
    const shots = (g.gallery || []).map(s => ({ type: 'image', src: s.src, alt: s.alt }));
    return [...(g.media || []), ...shots];
  }

  function statsMarkup(g) {
    const stats = [
      ['Role', g.role],
      ['Engine', g.engine],
      ['Team', g.team],
      ['Platform', g.platform],
      ['Timeframe', g.timeframe],
    ].filter(([, v]) => v);

    if (!stats.length) return '';

    return `
      <div class="detail-stats">
        ${stats.map(([label, value]) => `
          <div class="detail-stat">
            <span class="label">${esc(label)}</span>
            <span class="value">${esc(value)}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  function deepDiveMarkup(entries) {
    if (!entries || !entries.length) return '';

    return `
      <section class="detail-section">
        <p class="section-label">Behind the Build</p>
        ${entries.map(d => `
          <div class="deepdive-block">
            ${d.heading ? `<h3>${esc(d.heading)}</h3>` : ''}
            ${String(d.body || '').split(/\n\s*\n/).map(p => `<p>${esc(p)}</p>`).join('')}
          </div>
        `).join('')}
      </section>
    `;
  }

  function learningsMarkup(text) {
    if (!text) return '';

    return `
      <section class="detail-section">
        <p class="section-label">Postmortem</p>
        <div class="learnings-block">
          ${String(text).split(/\n\s*\n/).map(p => `<p>${esc(p)}</p>`).join('')}
        </div>
      </section>
    `;
  }

  function gameMarkup(g) {
    const slides = slidesFor(g);

    const slideEls = slides.map((s, i) => {
      const active = i === 0 ? ' active' : '';
      if (s.type === 'video') {
        return `
          <div class="slide slide-video${active}">
            <iframe src="" data-src="${esc(s.embed)}" frameborder="0" allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        `;
      }
      return `
        <div class="slide${active}">
          <img src="${esc(s.src)}" alt="${esc(s.alt || g.name + ' screenshot')}">
        </div>
      `;
    }).join('');

    const mediaBlock = slides.length ? `
      <div class="detail-media">
        <div class="game-slider" data-index="0">
          ${slideEls}
          <button class="slider-btn prev" onclick="slideCard(this,-1)">&#8249;</button>
          <button class="slider-btn next" onclick="slideCard(this,1)">&#8250;</button>
          <div class="slider-dots"></div>
        </div>
      </div>
    ` : '';

    const ctaLinks = `
      ${g.download ? `<a href="${esc(g.download)}" download class="btn btn-fill">Download</a>` : ''}
      ${g.source ? `<a href="${esc(g.source)}" target="_blank" rel="noopener" class="btn btn-outline">View Source</a>` : ''}
    `;

    const tagsBlock = (g.tags && g.tags.length)
      ? `<div class="game-tags">${g.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>`
      : '';

    const contribBlock = (g.contributions && g.contributions.length) ? `
      <section class="detail-section">
        <p class="section-label">My Contributions</p>
        <ul class="detail-contrib-list">
          ${g.contributions.map(c => `<li>${esc(c)}</li>`).join('')}
        </ul>
      </section>
    ` : '';

    return `
      <div class="detail-hero">
        <a class="back-link" href="index.html#games">&larr; All Games</a>
        <div class="detail-genre">${esc(g.genre)}</div>
        <h1 class="detail-title">${esc(g.name)}</h1>
        ${statsMarkup(g)}
      </div>

      ${mediaBlock}

      <div class="detail-body">
        <section class="detail-section">
          <p class="section-label">Overview</p>
          <p class="detail-desc">${esc(g.desc)}</p>
          <div class="game-footer detail-cta">
            ${ctaLinks}
            ${tagsBlock}
          </div>
        </section>

        ${contribBlock}
        ${deepDiveMarkup(g.deepDive)}
        ${learningsMarkup(g.learnings)}
      </div>
    `;
  }

  function prevNextMarkup(g) {
    const i = GAMES.findIndex(x => x.slug === g.slug);
    if (i === -1) return '';

    const prev = GAMES[(i - 1 + GAMES.length) % GAMES.length];
    const next = GAMES[(i + 1) % GAMES.length];

    return `
      <a class="prev-link" href="game.html?slug=${encodeURIComponent(prev.slug)}">&larr; ${esc(prev.name)}</a>
      <a class="next-link" href="game.html?slug=${encodeURIComponent(next.slug)}">${esc(next.name)} &rarr;</a>
    `;
  }
})();
