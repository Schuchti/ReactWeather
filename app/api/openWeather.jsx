var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0b90af6b97fada2917394c3d6169d585&units=metric';

// 0b90af6b97fada2917394c3d6169d585

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (response) {
      return response.data.main.temp;
    }, function (response) {
      throw new Error('Unable to fetch weather for that location!');
    });
  }
}
