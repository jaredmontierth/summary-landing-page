const campusURL = 'http://10.5.102.146:1234/';
const globalURL = 'http://147.185.221.212:41897';


   
   // Check the user's system preference for dark mode
   const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
   setDarkMode(prefersDarkScheme.matches);
   
   // Listen for changes in the user's system preference
   prefersDarkScheme.addListener((event) => {
    setDarkMode(event.matches);
   });

async function checkURLAvailability(url) {
  try {
    const response = await fetch(url, { mode: 'no-cors' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

(async function redirectToApp() {
  const campusAvailable = await checkURLAvailability(campusURL);
  if (campusAvailable) {
    window.location.href = campusURL;
  } else {
    window.location.href = globalURL;
  }
})

function setDarkMode(isDarkMode) {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
   }



();
