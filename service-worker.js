"use strict";var precacheConfig=[["404.html","690895e1a32d2248eaefeaea96be248c"],["index.html","690895e1a32d2248eaefeaea96be248c"],["service-worker.js","373cff02e0a8bf300ef032edeac438dc"],["static/css/app.e07c7914baa98b44cab09bc673c5117d.css","7bab66f535ceac2b881f9540366ea30b"],["static/js/0.bbd4b9e33b36ff4b4862.js","2c01ad89c57ab2dc0fa2165c25ef1002"],["static/js/1.16097a71753565b6f1cd.js","052e05d450aaacb00e1ea40981713784"],["static/js/2.ab8b6b4a628a47a25a87.js","ec422929295868455f2ab3d9c1947db4"],["static/js/3.13f3d9b3087cb3396a4f.js","80b4efb41c0c5629f498e67a5ec36307"],["static/js/4.e14bf0c6584c766b182c.js","7e380da81b89b89c093a355224caeffd"],["static/js/app.61cb9355844a86a496ba.js","3c55a8c5d720ce65adc53937f058f9d2"],["static/js/manifest.c5c241d9d9260f7b070c.js","293f5702dc1348b575cc8cff3083072d"],["static/js/vendor.99689e9fcd1de81abe7e.js","932164c5b6dc51dfe7a6d6e5e4452577"]],cacheName="sw-precache-v3-niallcolbert_xyz-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});