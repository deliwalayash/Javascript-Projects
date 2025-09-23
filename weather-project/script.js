
        const API_KEY = "710fddee8908cac13fed3d0c72f3d519"
        document.getElementById("sbt").addEventListener("click", getWeatherdetails, {})

        // Animation helper
        function showWeatherItem(elementId, delay = 0) {
            setTimeout(() => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.classList.add('animate');
                }
            }, delay);
        }

        async function getWeatherdetails(city) {
            try {
                let city = document.getElementById("city").value
                const cityname = document.getElementById("cityname").querySelector('span')
                const temperature = document.getElementById("temperature")
                const temperature_feels_like = document.getElementById("temperature_feels_like").querySelector('span')
                const country = document.getElementById("country").querySelector('span')
                const windspeed = document.getElementById("windspeed")
                const weathertype = document.getElementById("weathertype").querySelector('span')
                const humidity = document.getElementById("humidity")
                const pressure = document.getElementById("pressure")
                const sealevel = document.getElementById("sealevel")

                let weather_res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

                if (!weather_res.ok) {
                    throw new Error("City not found or data unavailable")
                }
                let weather_data = await weather_res.json()
                console.log(weather_data)

                cityname.innerHTML = weather_data.name
                temperature.innerHTML = `${weather_data.main.temp}°C`
                temperature_feels_like.innerHTML = `${weather_data.main.feels_like}°C`
                country.innerHTML = weather_data.sys.country
                windspeed.innerHTML = `${weather_data.wind.speed} m/s`
                weathertype.innerHTML = `${weather_data.weather[0].main} <img class="weather-image" src="https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png" alt="${weather_data.weather[0].description}">`
                humidity.innerHTML = `${weather_data.main.humidity}%`
                pressure.innerHTML = `${weather_data.main.pressure} hPa`
                sealevel.innerHTML = weather_data.main.sea_level ? `${weather_data.main.sea_level} hPa` : 'N/A'

                // Show weather container
                document.getElementById('weather-container').classList.add('show');

                // Show weather items with staggered animation
                showWeatherItem('humidity-container', 100);
                showWeatherItem('windspeed-container', 200);
                showWeatherItem('pressure-container', 300);
                showWeatherItem('sealevel-container', 400);

                // Clear any previous error messages
                document.getElementById("nodata").innerHTML = '';

            }
            catch (error) {
                document.getElementById("nodata").innerHTML = `<div class="error-message"><i class="fas fa-exclamation-circle"></i> ${error.message}</div>`
                
                // Hide weather container
                document.getElementById('weather-container').classList.remove('show');
            }
        }

        // Add Enter key functionality
        document.getElementById("city").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                getWeatherdetails();
            }
        });
