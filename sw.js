self.addEventListener("install", e => {

    caches.open("static").then(cache =>{
        return cache.addAll(["." , "/images/logo192.png"]);
      });
    

});