"use strict";

caches.open("files").then(cache=>{
    cache.addAll(["index.html","css/normalize.css","css/style.css","js/events.js","js/observer.js"]);
})

