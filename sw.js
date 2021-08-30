self.addEventListener("install", e => {
e.WaitUntil(
    caches.open("static").then(cache =>{
        return cache.addAll(["." , "/images/logo192.png"]);
      })
    
);
});