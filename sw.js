// Top level service worker to cache all assets
let staticCacheName = 'restaurant-reviews-v1';

self.addEventListener('install', function (event) {
    let urlsToCache = [
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/js/dbhelper.js',
        '/js/swhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/data/restaurants.json',
    ];
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            // Add URLs request/response to cache during install
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function (event) {
   event.respondWith(
       caches.match(event.request, {ignoreSearch: true}).then(function (response) {
           if (response) {
               return response;
           }
           return fetch(event.request); // Respond from Cache if available else fetch
       })
   )
});

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					return cacheName.startsWith('restaurant-reviews') &&
                        cacheName !== staticCacheName; // Filter for all restaurant-reviews cache other than currently running version and delete
				}).map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
});