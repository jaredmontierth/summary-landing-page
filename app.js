const campusURL = 'http://10.5.102.146:1234/';
const globalURL = 'http://147.185.221.212:41897';

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
})();
