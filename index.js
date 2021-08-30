if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registeration => {
        console.log("sw registeratiion");
    }).catch(error => {
       console.log('sw failed'); 
       console.log(error); 
    });
}