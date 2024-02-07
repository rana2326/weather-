var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrp = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "197a98b85a4daa15e41222334a308e3d"
function convertion(val){
    return(val-273).toFixed(3)
}

btn.addEventListener('click' , function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid='+ apik)
    .then(res => res.json())
    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML = `weather of <span>${nameval}<span>`
            temp.innerHTML = `temperature: <span>${convertion(tempature)} C <span>`
            description.innerHTML = `sky conditions: <span>${descrip}<span>`
            wind.innerHTML = `wind speed: <span>${wndspeed} km/h<span>`
        }
    )

    .catch(err=>alert('you entered the wrong city name'))
}
)