const quotes = [
        { quote: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke" },
        { quote: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
        { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
        { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
        { quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
        { quote: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates    " },
        { quote: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.", author: "Edsger Dijkstra" },
        { quote: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.", author: "Mark Zuckerberg" },
        { quote: "Technology should do the hard work so people can do the things that make them happiest.", author: " Larry Page" },
        { quote: "In a startup, absolutely nothing happens unless you make it happen.", author: "Marc Andreessen" },
        { quote: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
        { quote: "Don't worry about people stealing your design work. Worry about the day they stop.", author: "Jeffrey Zeldman" },
        { quote: "The purpose of computing is insight, not numbers.", author: "Richard Hamming" },
        { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    ];
   
let totalsec=0
let timeinterval=null
let result=document.getElementById("result")
let quote=document.getElementById("quote")
let audio=document.getElementById("audio")
let audio1=document.getElementById("audio1")
let resumeBtn = document.getElementById("resume")
        function quotepicker(){
            let idx=parseInt(Math.random() *14)
            quote.innerHTML = `<h1 class="text-primary mb-5 text-center">${quotes[idx].quote}</h1>
                                <h1 class="text-danger text-center">${quotes[idx].author}</h1>                    
            `
        }

        function setTimer(totalsec){

            let hour=parseInt(totalsec / 3600)
            let minsec = totalsec %3600
            let min=parseInt(minsec / 60)
            let sec= minsec % 60
            return `${hour.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")} `
        }

        function timer(){
            let hour = document.getElementById("hour").value || 0
            let min = document.getElementById("min").value || 0
            let sec = document.getElementById("sec").value || 0

            if(hour ==0 && min ==0 && sec ==0){
                Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter Hour , Min or Second to Start Timer",
                });
                return
            }

            totalsec= hour * 3600 + min * 60 + parseInt(sec)
            sbt.disabled = true
            resumeBtn.disabled = true;
            audio.play()
              
            timeinterval=setInterval(()=>{
                if(totalsec <=0){
                    clearInterval(timeinterval)
                     sbt.disabled = false
                     quote.classList.remove("d-none")
                     quotepicker() 
                     fireworks()
                     audio.pause()
                     audio1.play()
                      resumeBtn.disabled = false;
                        document.getElementById("min").value=""
                      document.getElementById("sec").value =""
                      document.getElementById("hour").value =""
                     return
                }
                totalsec--;
              result.innerHTML=setTimer(totalsec)
            },1000)
        }
       
        function pause(){
            audio.pause()
             resumeBtn.disabled = false;
            clearInterval(timeinterval)
        }

        function reset(){
            clearInterval(timeinterval)
            audio.pause()
            totalsec=0
            result.innerHTML = "00:00:00"
            sbt.disabled=false
            document.getElementById("min").value=""
            document.getElementById("sec").value =""
            document.getElementById("hour").value =""
        }
       
        function resume(){
            audio.play()
            clearInterval(timeinterval)
             timeinterval=setInterval(()=>{
                if(totalsec <=0){
                    clearInterval(timeinterval)
                     sbt.disabled = false
                     audio.pause()
                     audio1.play()
                     quotepicker()
                     fireworks()
                        document.getElementById("min").value=""
                        document.getElementById("sec").value =""
                        document.getElementById("hour").value =""
                        return
                    
                }
                totalsec--;
                 result.innerHTML=setTimer(totalsec)
            },1000)

        }


        document.getElementById("sbt").addEventListener("click",timer,{
        })
        document.getElementById("pause").addEventListener("click",pause,{
        })
        document.getElementById("reset").addEventListener("click",reset,{
        })
        document.getElementById("resume").addEventListener("click",resume,{
        })
//----------------------------------Confetti-------------------------------------//

 let confettiInterval = null;

    function fireworks() {
        const duration = 10 * 1000,
            animationEnd = Date.now() + duration,
            defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        confettiInterval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(confettiInterval);
            }

            const particleCount = 50 * (timeLeft / duration);

            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                })
            );
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                })
            );
        }, 250);
    }
