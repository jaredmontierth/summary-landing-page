const campusURL = 'http://10.5.102.146:1234/';
const globalURL = 'http://147.185.221.212:41897';

const checkImage = 'check.png'; // A small image file you need to add to your Flask app
const timeoutDuration = 5; // Adjust this value to change the timeout (in milliseconds)

function loadImage(url, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      img.onerror = img.onload = null;
      reject(new Error('Request timed out'));
    }, timeout);

    const img = new Image();
    img.onerror = () => {
      clearTimeout(timer);
      reject(new Error('Image failed to load'));
    };
    img.onload = () => {
      clearTimeout(timer);
      resolve();
    };
    img.src = url;
  });
}

(async function redirectToApp() {
  try {
    await loadImage(`${campusURL}/${checkImage}`, timeoutDuration);
    window.location.href = campusURL;
  } catch (error) {
    window.location.href = globalURL;
  }
})();
