importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1d8fa4c8169780908952.js",
    "revision": "7c925774f2ccdbd85cad9e019c8604eb"
  },
  {
    "url": "/_nuxt/67ec350b6d86922376e6.js",
    "revision": "3b721c0c991c542dad93dc028847a3dd"
  },
  {
    "url": "/_nuxt/8c5c957a675efafa7023.js",
    "revision": "fbd2b09d91baca5794c2fd52c7463972"
  },
  {
    "url": "/_nuxt/8cee59ac9f2690e65ad4.js",
    "revision": "1d765e5afdae46ad444e5db46f87df10"
  },
  {
    "url": "/_nuxt/d97022f9598701f75a70.js",
    "revision": "8091f46ec6cd75bd322efcf4224c96cc"
  },
  {
    "url": "/_nuxt/e879e00075cdd075d034.js",
    "revision": "4b142131d19cc5ac90b8e8d918fd6126"
  }
], {
  "cacheId": "multimer",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()


workbox.googleAnalytics.initialize()


workbox.routing.registerRoute(new RegExp('/^https://fonts.(?:googleapis|gstatic).com/(.*)/'), workbox.strategies.cacheFirst({"cacheName":"google-font-multimer","cacheExpiration":{"maxEntries":10000,"maxAgeSeconds":31536000}}), 'GET')
workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
