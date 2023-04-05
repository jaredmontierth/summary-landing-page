const campusURL = 'http://10.5.102.146:1234/';
const globalURL = 'http://147.185.221.212:41897';

const timeoutDuration = 500; // Adjust this value to change the timeout (in milliseconds)

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

async function redirectToApp() {
  try {
    await checkURLAvailability(campusURL, timeoutDuration);
    window.location.href = campusURL;
  } catch (error) {
    // If campusURL fails, try the globalURL
    try {
      await checkURLAvailability(globalURL, timeoutDuration);
      window.location.href = globalURL;
    } catch (globalError) {
      // Show an error message if both URLs fail
      document.querySelector('h1').textContent = 'Unable to access both campus and global instances.';
    }
  }
}

redirectToApp();
