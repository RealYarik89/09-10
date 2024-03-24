let button = document.querySelector(".button")


button.addEventListener("click", () => {

    async function succesGetLocation(position) {

        let latitude = position.coords.latitude
        let long = position.coords.longitude

        let res = await fetch(`api/weather/?lat=${latitude}&lon=${long}`)
        let resJson = await res.json()
        console.log(resJson)
        let city = document.querySelector(".city")
        city.innerText = resJson.city

        let temp = document.querySelector(".temp")
        temp.innerText = `${resJson.temp}° C`

        let icon = document.querySelector(".icon")
        let img = document.createElement("img")

        img.src = `https://openweathermap.org/img/wn/${resJson.icon}@2x.png`
        icon.appendChild(img)

        let discription = document.querySelector(".discription")
        discription.innerText = resJson.description

        let speed = document.querySelector(".speed")
        speed.innerText = `Ветер: ${resJson.speed} м/с`

        let humidity = document.querySelector(".humidity")
        humidity.innerText = `Влажность: ${resJson.humidity}%`
    }

    navigator.geolocation.getCurrentPosition(succesGetLocation)
})