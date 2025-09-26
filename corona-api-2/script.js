
        const nodata = document.getElementById("nodata")
        const loc = document.getElementById("loc")
        const confirmedCasesIndian = document.getElementById("confirmedCasesIndian")
        const confirmedCasesForeign = document.getElementById("confirmedCasesForeign")
        const deaths = document.getElementById("deaths")
        const discharged = document.getElementById("discharged")
        const totalConfirmed = document.getElementById("totalConfirmed")
        const loading = document.getElementById("loading")
        const resultsContainer = document.getElementById("resultsContainer")

  
        document.getElementById("ip").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                getApiResponse();
            }
        });

        document.getElementById("sbt").addEventListener("click", getApiResponse);

        async function getApiResponse() {
            let input = document.getElementById("ip").value.trim()
            
           
            nodata.innerHTML = ""
            resultsContainer.style.display = "none"
            
            if (!input) {
                nodata.innerHTML = '<div class="no-data"><i class="fas fa-exclamation-triangle"></i> Please enter a state name</div>'
                return;
            }
            
      
            loading.style.display = "block"

            try {
                let response = await fetch("https://api.rootnet.in/covid19-in/stats")

                if (response.ok != true) {
                    throw new Error("No data Found")
                }
                let getData = await response.json()

                let founddata = await getData.data.regional.find((states) => {
                    return states.loc.toLowerCase().includes(input.toLowerCase())
                })

                if (!founddata) {
                    throw new Error("State not found")
                }

                // Hide loading and show results
                loading.style.display = "none"
                resultsContainer.style.display = "grid"

                // Animate the values
                animateValue(loc, founddata.loc, true)
                animateValue(confirmedCasesIndian, founddata.confirmedCasesIndian)
                animateValue(confirmedCasesForeign, founddata.confirmedCasesForeign)
                animateValue(deaths, founddata.deaths)
                animateValue(discharged, founddata.discharged)
                animateValue(totalConfirmed, founddata.totalConfirmed)

            } catch (err) {
                loading.style.display = "none"
                nodata.innerHTML = '<div class="no-data"><i class="fas fa-exclamation-circle"></i> No data found. Please check the state name and try again.</div>'
            }
        }


        function animateValue(element, value, isText = false) {
            if (isText) {
                element.innerHTML = value
                return
            }
            
            const startValue = 0
            const endValue = parseInt(value) || 0
            const duration = 1500
            const startTime = performance.now()
            
            function updateValue(currentTime) {
                const elapsedTime = currentTime - startTime
                const progress = Math.min(elapsedTime / duration, 1)
                
                const easedProgress = 1 - Math.pow(1 - progress, 3)
                const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress)
                
                element.innerHTML = currentValue.toLocaleString()
                
                if (progress < 1) {
                    requestAnimationFrame(updateValue)
                } else {
                    element.innerHTML = endValue.toLocaleString()
                }
            }
            
            requestAnimationFrame(updateValue)
        }
   