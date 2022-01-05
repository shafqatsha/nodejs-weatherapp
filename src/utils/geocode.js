const axios = require('axios')

const geocode = (address, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=69f6f3a2e0bce3a364819797862e162c`


  axios.get(url).then(response => {

    if (response.data.cod === 200)
      return callback(undefined, response.data)

    if (!response.data.cod === 200)
      callback(response, undefined)

  }).catch((e) => {
    callback(e, undefined)

  })


}

module.exports = geocode