/// <reference lib="webworker" />
const worker = /** @type {ServiceWorkerGlobalScope} */ (/** @type {unknown} */ (self));
/* Retire the legacy Pykara navigation cache; never replace a missing URL with the home page. */
worker.addEventListener('install', () => worker.skipWaiting());
worker.addEventListener('activate', event => event.waitUntil((async () => {
  for (const key of await caches.keys()) if (key.startsWith('pykara-')) await caches.delete(key);
  await worker.registration.unregister();
  await worker.clients.claim();
})()));
