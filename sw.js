

//Instalacion del service Worker
self.addEventListener('install', (event) =>{
  event.waitUntil(
    caches.open('mi-cache').then((cache)=>{
      return cache.addAll([
        "./",
        './index.html',
        './favicon.png',
        './main.js',
        './manifest.json',
        './sw.js',
        './css/style.css',
        './images/origen.jpg',
        './images/dia.jpg',
        './images/espa.jpg',
        './images/yaqui.jpg',

      ]);
    })
  );
});


//Activacion del service Worker
self.addEventListener('active', (event)=>{
  event.waitUntil(
    caches.keys().then((cacheNames) =>{
      return Promise.all(
        cacheNames.map((cacheName)=>{
          if (cacheName !== 'mi-cache'){
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


// Intercepta las solicitudes y maneja las respuestas desde la cache

self.addEventListener('fetch', (event) =>{
  event.respondWith(
    caches.match(event.request).then((response) =>{
      return response || fetch(event.request);
    })
  );
});
