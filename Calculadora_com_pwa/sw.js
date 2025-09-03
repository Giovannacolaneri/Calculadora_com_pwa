const Cache_name = "calculadora";
const Cache_assets =
    ["/Calculadora_com_pwa/index.html",
        "/Calculadora_com_pwa/manifest.json",
        "/Calculadora_com_pwa/script.js",
        "/Calculadora_com_pwa/sw.js",
        "/Calculadora_com_pwa/icon-192x192.png", "icon-512x512.png"

    ];


self.addEventListener('install', (event) => {
    /* console.log('Service Worker: Instalado');*/
    caches.open(Cache_name).then((cache) => {
        console.log("cache aberto")
        cache.addAll(Cache_assets);
    });
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Ativado');

});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request))
    caches.match(event.request).then((response) => {
        return response || fetch(event.request);
    })
});