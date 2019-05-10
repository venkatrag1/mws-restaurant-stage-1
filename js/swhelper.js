(function () {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => { console.log("Registered service worker"); })
        .catch(() => { console.log("Failed to register service worker"); });
  }
});