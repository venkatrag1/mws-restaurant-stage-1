
let myCache = 'restaurant-reviews-v1';

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
        caches.open(myCache).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function (event) {
   console.log(event.request);
});