const campusURL = 'http://10.5.102.146:1234/';
const globalURL = 'http://147.185.221.212:41897';
const timeoutDuration = 50; // Adjust this value to change the timeout (in milliseconds)

function checkURLAvailability(url, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Request timed out')), timeout);

    fetch(url, { mode: 'no-cors' })
      .then(response => {
        clearTimeout(timer);
        resolve(response.ok);
      })
      .catch(error => {
        clearTimeout(timer);
        reject(error);
      });
  });
}

(async function redirectToApp() {
  try {
    await checkURLAvailability(campusURL, timeoutDuration);
    window.location.href = campusURL;
  } catch (error) {
    window.location.href = globalURL;
  }
})();
