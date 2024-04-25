// service-worker.js
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    'usuario_cadastrado.html',
    'usuario_cadastrado.css',
    '/logo144.png',
    '/logo192.png',
    '/logo512.png',
    '/user.png'
    // Adicione mais arquivos que você deseja armazenar em cache aqui
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
