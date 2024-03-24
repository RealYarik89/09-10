require("dotenv").config()

module.exports = async function (req, res) {

    let latitude = req.query.lat
    let long = req.query.lon
    let apiToken = process.env.TOKEN

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${long}&appid=${apiToken}&lang=ru`)
    let resJson = await result.json()
   
    let weatherJson = {
        city: resJson.name,
        temp: Math.round(resJson.main.temp - 272),
        icon: resJson.weather[0].icon,
        description: resJson.weather[0].description,
        speed: resJson.wind.speed,
        humidity: resJson.main.humidity
    }

    res.json(weatherJson)

};

