const refs = {
  BASE_URL: 'https://api.thecatapi.com/v1',
  URL: `https://api.thecatapi.com/v1/images/search?limit=20`,
  ENDPOINT: '/breeds',
  KEY: 'live_6mSRucqNyrSNqpDecLOPuWFbMXAyH4nVJnDAVE1MvYAWkJLHdyznA0qqn2NkF7EW',
  img: document.querySelector('.js-img'),
  btnRandom: document.querySelector('.js-btn'),
};

async function fetchHandler() {
  try {
    const response = await fetch(refs.URL, {
      headers: { 'x-api-key': refs.KEY },
    });
    const data = await response.json();
    refs.img.src = data[0].url;
  } catch (error) {
    console.log(error);
  }
}

refs.btnRandom.addEventListener('click', () => {
  let isLoaded = refs.img.complete;
  if (isLoaded) {
    fetchHandler();
  }
});