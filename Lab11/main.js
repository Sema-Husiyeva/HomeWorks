let weatherInput = document.getElementById('weather-input');
let weather = document.querySelector('.weather');
let bgVideo = document.getElementById('bg-video');

async function getWeather(city) {
    let apiKey = "34b01711028e5da8e9c05e504daf02ae";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=az`;
    let response = await fetch(url);
    let data = await response.json();
    weather.innerHTML='';

        weather.innerHTML+=
        `
           <p>${data.name} ${data.sys.country}</p>
           <p>${data.main.temp}°</p>
           <p>${data.weather[0].description}</p>
           <img src=" https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
        `

        weatherInput.value='';

        if(data.weather[0].icon == '01d' || data.weather[0].icon == '01n'){
            bgVideo.setAttribute('src','https://assets.mixkit.co/videos/18273/18273-720.mp4')
        } else if(data.weather[0].icon == '02d' || data.weather[0].icon == '02n'){
            bgVideo.setAttribute('src','https://assets.mixkit.co/videos/3128/3128-720.mp4')
        } else if(data.weather[0].icon == '03d' || data.weather[0].icon == '03n'){
            bgVideo.setAttribute('src','https://assets.mixkit.co/videos/9471/9471-720.mp4')
        } else if(data.weather[0].icon == '04d' || data.weather[0].icon == '04n'){
            bgVideo.setAttribute('src','https://assets.mixkit.co/videos/9311/9311-720.mp4') 
        } else if(data.weather[0].icon == '09d' || data.weather[0].icon == '09n'){
            bgVideo.setAttribute('src','https://assets.mixkit.co/videos/6890/6890-720.mp4')
        } else if(data.weather[0].icon == '10d' || data.weather[0].icon == '10n'){
            bgVideo.setAttribute('src','https://assets.mixkit.co/videos/20311/20311-720.mp4')
        } else if(data.weather[0].icon == '11d' || data.weather[0].icon == '11n'){
            bgVideo.setAttribute('src','https://assets.mixkit.co/videos/47948/47948-720.mp4')
        } else if(data.weather[0].icon == '13d' || data.weather[0].icon == '13n'){
            bgVideo.setAttribute('src','https://assets.mixkit.co/videos/3311/3311-720.mp4')
        } else if(data.weather[0].icon == '50d' || data.weather[0].icon == '50n'){
            bgVideo.setAttribute('src','https://assets.mixkit.co/videos/44616/44616-720.mp4')
        } 

        
}


weatherInput.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        getWeather(weatherInput.value);
    }
});