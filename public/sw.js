const cacheName = `mws-hadyan-1.0`;
const staticAssets = [
  "./",
  "./app.js",
  "./css/main.css",
  "./img/add2numbers.jpg",
  "./img/cloud.jpg",
  "./img/favicon.ico",
  "./img/fetch-json.jpg",
  "./img/gdk-icon.png",
  "./img/gdk-logo.png",
  "./img/hadyan.jpg",
  "./img/map.jpg",
  "./img/night.jpg",
  "./img/icon/icon-192x192.png",
  "./img/icon/icon-512x512.png",
  "./js/fontawesome-all.min.js",
  "./project1/index.html",
  "./project1/js/add2numbers.js",
  "./project2/index.html",
  "./project2/img/tokyo-tower.jpg",
  "./project2/js/map.js",
  "./project3/index.html",
  "./project3/data/coworking.json",
  "./project3/img/dilo-tangerang.jpg",
  "./project3/img/epica-coffee.jpg",
  "./project3/img/evhive-the-breeze.jpg",
  "./project3/img/goodspace-coworking-office-meeting-space.jpg",
  "./project3/img/koloni-bintaro.jpg",
  "./project3/img/skystar-ventures-coworking-space.jpg",
  "./project3/img/two-spaces-bsd-coworking-space.jpg",
  "./project3/img/winc-collaborative-space-cafe.jpg",
  "./project3/js/map.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(staticAssets))
  );
});

self.addEventListener("message", event => {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return (
        response ||
        fetch(event.request).then(response => {
          return caches.open(cacheName).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cache => {
            return cache.startsWith("mws-hadyan-") && cache !== cacheName;
          })
          .map(cache => {
            return caches.delete(cache);
          })
      );
    })
  );
});
/*
self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open("gdk-assets").then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(staticAssets);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response.
      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(function(response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // IMPORTANT: Clone the response. A response is a stream
        // and because we want the browser to consume the response
        // as well as the cache consuming the response, we need
        // to clone it so we have two streams.
        var responseToCache = response.clone();

        caches.open("gdk-assets").then(function(cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

self.addEventListener("activate", function(event) {
  var cacheWhitelist = ["pages-cache-v1", "blog-posts-cache-v1"];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
*/
/*
self.addEventListener("install", async event => {
  //console.log(`install`);
  const cache = await caches.open("gdk-static");
  cache.addAll(staticAssets);
});

self.addEventListener("fetch", event => {
  //console.log(`event`);
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(networkFirst(req));
  }
});
*/
