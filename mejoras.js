/* ============================================================
   MEJORAS DE MG CLIMAS (animaciones) — se carga en todas las páginas
   ------------------------------------------------------------
   • Aparición de elementos al hacer scroll (al subir Y al bajar).
   • Transición suave al cambiar de página (adiós al corte brusco).
   • Barra de progreso de lectura y botón "volver arriba".
   • Contadores animados en la portada.
   No necesitas editar este archivo para administrar el catálogo.
   ============================================================ */
(function(){
  'use strict';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- aparición al hacer scroll (sube y baja) ---------- */
  // Elementos que se animan solos aunque no tengan la clase "reveal":
  var AUTO = [
    '.page-head .crumb', '.page-head h1', '.page-head p', '.filters',
    '.prod-card',
    '.pd .crumb', '.pd-media', '.pd-body > *:not(br)',
    '.acc-head .demo-tag', '.acc-head .hello', '.acc-head p',
    '.sum-card', '.sec-title', '.order-card', '.equip-card', '.help-box'
  ];

  var io = null;
  if ('IntersectionObserver' in window && !reduce) {
    io = new IntersectionObserver(function(entries){
      var k = 0;
      entries.forEach(function(e){
        if (e.isIntersecting) {
          // pequeño escalonado cuando entran varios a la vez
          e.target.style.transitionDelay = Math.min(k * 70, 420) + 'ms';
          k++;
          e.target.classList.add('in');
        } else {
          // al salir de la vista se oculta, para re-animarse al volver
          e.target.style.transitionDelay = '0ms';
          e.target.classList.remove('in');
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });
  }

  function setupReveals(root){
    root = root || document;
    AUTO.forEach(function(sel){
      var nodes;
      try { nodes = root.querySelectorAll(sel); } catch(e){ return; }
      Array.prototype.forEach.call(nodes, function(el){ el.classList.add('reveal'); });
    });
    Array.prototype.forEach.call(root.querySelectorAll('.reveal'), function(el){
      if (el.__mgSeen) return;
      el.__mgSeen = true;
      if (io) io.observe(el);
      else el.classList.add('in'); // sin soporte o con "menos movimiento": mostrar de una vez
    });
  }
  setupReveals(document);

  // El catálogo se vuelve a dibujar al cambiar de filtro: animar las tarjetas nuevas
  var grid = document.getElementById('prodGrid');
  if (grid && window.MutationObserver) {
    new MutationObserver(function(){ setupReveals(grid); }).observe(grid, { childList: true });
  }

  /* ---------- transición suave entre páginas ---------- */
  document.addEventListener('click', function(ev){
    if (ev.defaultPrevented) return;
    var a = ev.target && ev.target.closest ? ev.target.closest('a') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (!href || href.charAt(0) === '#') return;              // ancla en la misma página
    if (a.target && a.target !== '_self') return;             // se abre en otra pestaña
    if (/^(mailto:|tel:|sms:|javascript:)/i.test(href)) return;
    if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey || ev.button > 0) return;
    var url;
    try { url = new URL(a.href, location.href); } catch(e){ return; }
    if (url.origin !== location.origin) return;               // sitio externo
    if (url.pathname === location.pathname && url.hash) return; // ancla de esta misma página
    if (reduce) return;
    ev.preventDefault();
    document.body.classList.add('mg-exit');
    setTimeout(function(){ location.href = url.href; }, 220);
  });
  // al volver con el botón "atrás" del navegador, quitar el velo
  window.addEventListener('pageshow', function(){ document.body.classList.remove('mg-exit'); });

  /* ---------- barra de progreso + botón volver arriba ---------- */
  var prog = document.createElement('div');
  prog.className = 'mg-progress';
  document.body.appendChild(prog);

  var topBtn = document.createElement('button');
  topBtn.type = 'button';
  topBtn.className = 'mg-top';
  topBtn.setAttribute('aria-label', 'Volver arriba');
  topBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  if (!document.querySelector('.wa-float')) topBtn.style.bottom = '26px';
  document.body.appendChild(topBtn);
  topBtn.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });

  function onScroll(){
    var h = document.documentElement;
    var y = window.scrollY || h.scrollTop || 0;
    var max = h.scrollHeight - h.clientHeight;
    prog.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
    topBtn.classList.toggle('show', y > 520);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- contadores animados de la portada ---------- */
  function countUp(el){
    var m = el.textContent.match(/^([^\d]*)([\d,\.]+)(.*)$/);
    if (!m) return;
    var target = parseFloat(m[2].replace(/,/g, ''));
    if (!isFinite(target)) return;
    var pre = m[1], suf = m[3], t0 = null, dur = 1100;
    function step(ts){
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      p = 1 - Math.pow(1 - p, 3); // arranca rápido y frena suave
      el.textContent = pre + Math.round(target * p).toLocaleString('en-US') + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var stats = document.querySelectorAll('.hero-stats strong');
  if (stats.length && io) {
    var cio = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (!e.isIntersecting || e.target.__mgContado) return;
        e.target.__mgContado = true;
        countUp(e.target);
        cio.unobserve(e.target);
      });
    }, { threshold: .6 });
    Array.prototype.forEach.call(stats, function(s){ cio.observe(s); });
  }
})();
