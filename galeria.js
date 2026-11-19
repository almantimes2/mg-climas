/* ============================================================
   GALERÍA "NUESTROS TRABAJOS" DE G2 CLIMAS (solo portada)
   ------------------------------------------------------------
   Lee la lista window.TRABAJOS (archivo trabajos.js, que se genera
   solo a partir de la carpeta fotos-trabajos/) y dibuja:
   • una cuadrícula de fotos que carga de a poco ("Ver más"),
   • un visor ampliado con flechas, teclado y deslizar en el celular.
   Si no hay fotos, la sección y sus enlaces siguen ocultos.
   No necesitas editar este archivo para agregar fotos.
   ============================================================ */
(function(){
  'use strict';

  var data = Array.isArray(window.TRABAJOS) ? window.TRABAJOS : [];
  var sec = document.getElementById('trabajos');
  var grid = document.getElementById('galGrid');
  var moreBtn = document.getElementById('galMore');
  if (!sec || !grid || !data.length) return;

  // hay fotos: mostrar la sección y los enlaces que apuntan a ella
  sec.hidden = false;
  Array.prototype.forEach.call(document.querySelectorAll('[data-trabajos]'), function(a){ a.hidden = false; });

  var PAGE = 12;          // se muestran de 12 en 12 (cuadra en 2 y en 3 columnas)
  var shown = 0;
  var ALT = 'Trabajo de G2 Climas en la Comarca Lagunera';

  /* ---------- cuadrícula ---------- */
  function tile(i, n){
    var f = data[i];
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'gal-item';
    b.setAttribute('data-i', i);
    b.style.setProperty('--n', n);
    b.setAttribute('aria-label', f.t ? 'Ampliar foto: ' + f.t : 'Ampliar foto ' + (i + 1) + ' de ' + data.length);

    var img = document.createElement('img');
    img.src = f.m;
    img.alt = f.t || ALT;
    if (f.w && f.h){ img.width = f.w; img.height = f.h; }
    img.loading = 'lazy';
    img.decoding = 'async';
    b.appendChild(img);

    if (f.t){
      var c = document.createElement('span');
      c.className = 'cap';
      var tx = document.createElement('span');
      tx.textContent = f.t;
      c.appendChild(tx);
      b.appendChild(c);
    }
    return b;
  }

  function render(){
    var end = Math.min(shown + PAGE, data.length);
    var frag = document.createDocumentFragment();
    for (var i = shown, n = 0; i < end; i++, n++) frag.appendChild(tile(i, n % PAGE));
    grid.appendChild(frag);
    shown = end;
    var left = data.length - shown;
    moreBtn.hidden = left <= 0;
    moreBtn.textContent = 'Ver más trabajos (' + left + ')';
  }
  render();
  moreBtn.addEventListener('click', render);

  /* ---------- visor ampliado ---------- */
  var lb = null, lbImg, lbCap, lbCount, btnClose, btnPrev, btnNext;
  var cur = 0, lastFocus = null, x0 = null, y0 = null;

  var ICON = {
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    prev:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    next:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>'
  };

  function build(){
    lb = document.createElement('div');
    lb.className = 'lb';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Galería de trabajos');
    lb.innerHTML =
      '<button type="button" class="lb-btn lb-close" aria-label="Cerrar">' + ICON.close + '</button>' +
      '<button type="button" class="lb-btn lb-prev" aria-label="Foto anterior">' + ICON.prev + '</button>' +
      '<figure class="lb-fig">' +
        '<img class="lb-img" alt="">' +
        '<figcaption class="lb-info"><div class="lb-cap"></div><div class="lb-count" aria-live="polite"></div></figcaption>' +
      '</figure>' +
      '<button type="button" class="lb-btn lb-next" aria-label="Foto siguiente">' + ICON.next + '</button>';
    document.body.appendChild(lb);

    lbImg = lb.querySelector('.lb-img');
    lbCap = lb.querySelector('.lb-cap');
    lbCount = lb.querySelector('.lb-count');
    btnClose = lb.querySelector('.lb-close');
    btnPrev = lb.querySelector('.lb-prev');
    btnNext = lb.querySelector('.lb-next');

    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', function(e){ e.stopPropagation(); go(cur - 1); });
    btnNext.addEventListener('click', function(e){ e.stopPropagation(); go(cur + 1); });
    // clic en el fondo (no en la foto ni en los botones) cierra
    lb.addEventListener('click', function(e){
      if (e.target === lb || e.target.classList.contains('lb-fig') || e.target.classList.contains('lb-info')) close();
    });
    // deslizar en el celular
    lb.addEventListener('touchstart', function(e){
      if (e.touches.length !== 1) { x0 = null; return; }
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    }, { passive: true });
    lb.addEventListener('touchend', function(e){
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      x0 = null;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) go(cur + (dx < 0 ? 1 : -1));
    });
    lbImg.addEventListener('load', function(){ lbImg.classList.remove('cargando'); });
    lbImg.addEventListener('error', function(){
      // si la grande falla, usar la chica para no dejar el visor vacío
      var f = data[cur];
      if (!lb.classList.contains('open')) return;
      if (f && lbImg.getAttribute('src') !== f.m) lbImg.src = f.m;
      else lbImg.classList.remove('cargando');
    });
  }

  function preload(i){
    var f = data[(i + data.length) % data.length];
    if (f){ var im = new Image(); im.src = f.l; }
  }

  function show(i){
    cur = (i + data.length) % data.length;
    var f = data[cur];
    lbImg.classList.add('cargando');
    lbImg.src = f.l;
    lbImg.alt = f.t || ALT;
    lbCap.textContent = f.t || '';
    lbCount.textContent = (cur + 1) + ' / ' + data.length;
    var solo = data.length < 2;
    btnPrev.hidden = btnNext.hidden = solo;
    if (!solo){ preload(cur + 1); preload(cur - 1); }
  }

  function go(i){ if (lb && lb.classList.contains('open')) show(i); }

  function open(i, from){
    if (!lb) build();
    lastFocus = from || document.activeElement;
    show(i);
    lb.classList.add('open');
    document.documentElement.classList.add('lb-lock');
    // un cuadro después, para que la transición de opacidad sí corra
    requestAnimationFrame(function(){ lb.classList.add('show'); });
    btnClose.focus();
    document.addEventListener('keydown', onKey);
  }

  function close(){
    if (!lb || !lb.classList.contains('open')) return;
    lb.classList.remove('show');
    document.documentElement.classList.remove('lb-lock');
    document.removeEventListener('keydown', onKey);
    setTimeout(function(){
      if (lb.classList.contains('show')) return;   // se volvió a abrir antes de terminar
      lb.classList.remove('open');
      lbImg.removeAttribute('src');
    }, 250);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function onKey(e){
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); go(cur + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(cur - 1); }
    else if (e.key === 'Tab') {
      // el foco se queda dentro del visor mientras está abierto
      var items = [btnClose, btnPrev, btnNext].filter(function(b){ return !b.hidden; });
      var k = items.indexOf(document.activeElement);
      if (e.shiftKey && k <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
      else if (!e.shiftKey && (k === -1 || k === items.length - 1)) { e.preventDefault(); items[0].focus(); }
    }
  }

  // un solo oyente para todas las fotos (también las que se agregan con "Ver más")
  grid.addEventListener('click', function(e){
    var t = e.target.closest ? e.target.closest('.gal-item') : null;
    if (t) open(parseInt(t.getAttribute('data-i'), 10), t);
  });
})();
