const apiKey = 'your_api_key';

const weatherForm = document.getElementById('weatherForm');

const weatherInfo = document.getElementById('weatherInfo');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // debugger;
  // const city = document.getElementById('city').value.trim();
  const lat = document.getElementById('lat').value.trim();
  const lng = document.getElementById('lng').value.trim();

  if (!lat || !lng) {
    weatherInfo.textContent = "Please provide all inputs";
    return;
  }

  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;

  // debugger;
  processFormData(apiUrl);
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function processFormData(apiUrl) {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp} &deg;C</p>
      <p>Weather: ${capitalizeFirstLetter(data.weather[0].description)}</p>`;
    })
    .catch(error => {
      console.error(`Error: ${error}`);
      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}