class ServiceWorkerManager {
    constructor() {
      if ('serviceWorker' in navigator) {
        this.registerServiceWorker();
      } else {
        console.log('Service Worker wird von diesem Browser nicht unterstützt.');
      }
    }
  
    registerServiceWorker() {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((registration) => {
            console.log('Service Worker registriert:', registration);
          })
          .catch((error) => {
            console.log('Service Worker Registrierung fehlgeschlagen:', error);
          });
      });
    }
  }
  
  // Instanziiere die Klasse, um den Service Worker zu registrieren
  new ServiceWorkerManager();
  