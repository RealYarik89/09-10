const router = require("express").Router() 
const getWeather = require("../services/weather")

router.get("/weather", getWeather)

module.exports = router