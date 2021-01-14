const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=cat`;
const CHANGE_TIME = 300000;

const body = document.querySelector("body");

function getBackground() {
  fetch(UNSPLASH_URL)
    .then((response) => response.json())
    .then((json) => {
      const image = json;
      if (image.urls) {
        const fullUrl = image.urls.full;
        saveBackground(fullUrl);
      } else {
        getBackground();
      }
    });
  return;
}

function saveBackground(imageUrl) {
  const savedImage = localStorage.getItem("bgImage");
  if (savedImage !== null) {
    localStorage.removeItem("bgImage");
  }

  const imageObject = {
    url: imageUrl,
  };
  localStorage.setItem("bgImage", JSON.stringify(imageObject));
  loadBackground();
  return;
}

function changeBackground() {
  const savedImage = localStorage.getItem("bgImage");
  if (savedImage !== null) {
    localStorage.removeItem("bgImage");
  } else {
    getBackground();
  }
}

function loadBackground() {
  const savedImage = localStorage.getItem("bgImage");
  if (savedImage === null) {
    getBackground();
  } else {
    const parsedImage = JSON.parse(savedImage);
    body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${parsedImage.url})`;
  }

  return;
}

function init() {
  // loadBackground();
  // setInterval(changeBackground, CHANGE_TIME);
  return;
}

init();
