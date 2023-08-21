const butInstall = document.getElementById('buttonInstall');
let deferrredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferrredPrompt = event;
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if(deferrredPrompt){
        deferrredPrompt.prompt();

        const result = await deferrredPrompt.userChoice;
         if (result.outcome === 'accepted') {
            console.log('user accepted the install prompt');
         }else {
            console.log('user dismissed the install prompt');
         }

         deferrredPrompt = null 
         butInstall.style.display = 'none';

    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('app was successfully installed');
});
