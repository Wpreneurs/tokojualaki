self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("simpeltoko-v1").then(cache => {
      return cache.addAll([
        "/",
        "/?m=1",  // versi mobile
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaxkOff237mrbExBXCQrKbCLNKRAq7UeXqsy6AUCvQq7NPYwkncDWHnnZUyH1a3uQU8V7AGh_ft0ugpY9cNT3BglJBldL2hoSs7DWn9xWcoOr1GS9fe9Bn4EjfglCzP55Pd_g1ezwUYjNCA9E9sF5ZJ1AfJHBsNurN3F8xPyxsOyg5HQzZJENKe_tx5fBC/s16000/AVvXsEjTlrF_E44ChZz6v-dlSmj-HOIA%20-%20Copy.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

