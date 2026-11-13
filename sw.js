/* Polreg Sulut — simpan aplikasi supaya tetap terbuka tanpa sinyal. Versi: mwegd9db */
var CACHE = 'polreg-mwegd9db';
var CORE = ['./', 'index.html', 'manifest.webmanifest', 'lib/chart.umd.min.js', 'lib/xlsx.full.min.js', 'data/polreg.json', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); })); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k.indexOf('polreg-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  var fresh = req.mode === 'navigate' || /\/(index\.html)?$/.test(url.pathname) || /\/data\/polreg\.json$/.test(url.pathname);
  if (fresh) {
    /* halaman & data: ambil yang terbaru dari GitHub, kalau tidak ada sinyal pakai simpanan */
    var key = url.origin + url.pathname;
    e.respondWith(fetch(req, { cache: 'no-store' }).then(function (r) {
      if (r && r.ok) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(key, cp); }); }
      return r;
    }).catch(function () { return caches.match(key).then(function (m) { return m || caches.match(req, { ignoreSearch: true }); }); }));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(function (m) { return m || fetch(req).then(function (r) { if (r && r.ok) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(req, cp); }); } return r; }); }));
});
