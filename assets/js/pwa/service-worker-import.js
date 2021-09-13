if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://dev.k4133.tech/nnn/02/assets/js/pwa/service-worker.js').then(registration => {
        console.log('ServiceWorker registration successful.');
    }).catch(err => {
        console.log('ServiceWorker registration failed.');
    });
}
