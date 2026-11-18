// Clima50 v5.2: armazenamento local do aplicativo, sem cache de dados de terceiros ou coordenadas GPS.
const CACHE='clima50-shell-v5-2';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('clima50-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  const url=new URL(req.url);
  if(req.method!=='GET'||url.origin!==self.location.origin) return;
  if(!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
  if(req.mode==='navigate') {
    event.respondWith(fetch(req).catch(()=>caches.match('./index.html')));
    return;
  }
  if(SHELL.some(p=>url.pathname===new URL(p,self.registration.scope).pathname)) {
    event.respondWith(fetch(req).catch(()=>caches.match(req)));
  }
});
