// Mandatory workbox config when using custom service worker with the PWA plugin from the Vue.js CLI
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Caching pages
workbox.routing.registerRoute(/\.(?:html|css)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'pages',
  })
);

// Caching images
workbox.routing.registerRoute(/\.(?:png|gif|jpg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50
      })
    ]
  })
);

// Mandatory fetch handler to comply to 'add to homescreen' pop up prerequisites
self.addEventListener("fetch", function(event){

}); 


