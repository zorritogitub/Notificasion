// Service Worker para notificaciones push
self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});

// Escuchar mensajes
self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        self.registration.showNotification(event.data.title, {
            body: event.data.body,
            icon: '⏳',
            tag: 'countdown_notification',
            requireInteraction: true,
            vibrate: [200, 100, 200]
        });
    }
});
