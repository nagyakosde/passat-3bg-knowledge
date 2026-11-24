const CACHE = 'passat-3bg-nexus-r7';
const FILES = [
  './','./index.html','./manifest.webmanifest',
  './passat-variant.webp','./passat-sedan.webp','./wireframe-car.webp',
  './module-engine.webp','./module-brakes.webp','./module-turbo.webp','./module-electrical.webp','./module-body.webp',
  './icon-192.png','./icon-512.png'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil((async () => { for (const key of await caches.keys()) if ((key.startsWith('passat-3bg-nexus-') || key.startsWith('p3bg-')) && key !== CACHE) await caches.delete(key); await self.clients.claim(); })()));
self.addEventListener('fetch', event => { const req=event.request; if(req.method!=='GET' || new URL(req.url).origin!==self.location.origin) return; event.respondWith((async()=>{const cache=await caches.open(CACHE); const cached=await cache.match(req); try {const net=await fetch(req); if(net.ok) cache.put(req,net.clone()); return net;} catch(e) {return cached || cache.match('./index.html');}})()); });
