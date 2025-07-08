 let counter = 0;
 let scoreX = 0;
 let scoreO=0;

        function resetgame(){
                for(let i = 1;i <=9;i++){
                document.getElementById(`b${i}`).innerHTML ="";
            }
             counter=0;
            document.getElementById("turn").innerHTML = "X"
             document.getElementById("scoreX").innerHTML=0;
             document.getElementById("scoreO").innerHTML=0;
             scoreX = 0;
              scoreO=0;

        }
        function reset(){
            for(let i = 1;i <=9;i++){
                document.getElementById(`b${i}`).innerHTML ="";
            }
            counter=0;
             document.getElementById("turn").innerHTML = "X"

        }
        function alertfire(symbol){
          Swal.fire({
    title: `Player ${symbol} Wins`,
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
    timerProgressBar: true
}).then(() => {
    reset();
});
        if(symbol =="X"){
            scoreX++;
            document.getElementById("scoreX").innerHTML=scoreX;
        }
        else{
             scoreO++;
            document.getElementById("scoreO").innerHTML=scoreO;

        }
         document.getElementById("turn").innerHTML = "X"
        }
        // function draw(){
        //     if(counter ==9)
          
        // reset();
        //  document.getElementById("turn").innerHTML = "X"
        //     }
function draw(){
    if(counter == 9){
        Swal.fire({
            title: `Game Draw`,
            icon: "question",
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar: true
        }).then(() => {
            reset();
        });
    }
}

        function winner(symbol){
            let flag=true;

            //checking 1st row
            for(let i = 1; i <=3;i++){
                let val=document.getElementById(`b${i}`).innerHTML;
                console.log(val);
                if(val != symbol){
                    flag = false;
                    break;
                }
               
                
            }
            if(flag){
                alertfire(symbol);
                return true;
            }

            //checking for 2nd row
            flag=true;
             for(let i = 4; i <=6  ;i++){
                let val=document.getElementById(`b${i}`).innerHTML;
                console.log(val);
                if(val != symbol){
                    flag = false;
                    break;
                }
               
                
            }
            if(flag){
                alertfire(symbol);
                  return true;
            }

            //checking for third row

             flag=true;
             for(let i = 7; i <=9  ;i++){
                let val=document.getElementById(`b${i}`).innerHTML;
                console.log(val);
                if(val != symbol){
                    flag = false;
                    break;
                }
               
                
            }
            if(flag){
                alertfire(symbol);
                  return true;
            }

            //checking for 1st column

             flag=true;
             for(let i = 1; i <=7  ;i+=3){
                let val=document.getElementById(`b${i}`).innerHTML;
                console.log(val);
                if(val != symbol){
                    flag = false;
                    break;
                }
               
                
            }
            if(flag){
                alertfire(symbol);
                  return true;
            }

            //checking for 2nd column

            
             flag=true;
             for(let i = 2; i <=8  ;i+=3){
                let val=document.getElementById(`b${i}`).innerHTML;
                console.log(val);
                if(val != symbol){
                    flag = false;
                    break;
                }
               
                
            }
            if(flag){
                alertfire(symbol);
                  return true;
            }
            //checking for 3rd column

            
             flag=true;
             for(let i = 3; i <=9 ;i+=3){
                let val=document.getElementById(`b${i}`).innerHTML;
                console.log(val);
                if(val != symbol){
                    flag = false;
                    break;
                }     
            }
            if(flag){
                alertfire(symbol);
                  return true;
            }
            //checking 1st diagonal

            
             flag=true;
             for(let i = 1; i <=9  ;i+=4){
                let val=document.getElementById(`b${i}`).innerHTML;
                console.log(val);
                if(val != symbol){
                    flag = false;
                    break;
                }
               
                
            }
            if(flag){
                alertfire(symbol);
                  return true;
            }
            //checking 2nd diagonal

            
             flag=true;
             for(let i = 3; i <=7  ;i+=2){
                let val=document.getElementById(`b${i}`).innerHTML;
                console.log(val);
                if(val != symbol){
                    flag = false;
                    break;
                }
               
                
            }
            if(flag){
                alertfire(symbol);
                  return true;
            }

           
            return false;
       
        }
        $(document).ready(function(){
            $(".cell").on("click",function(){
               let val=this;
               
              if(val.innerHTML == ""){
                 if(counter % 2 ==0){
                      document.getElementById("turn").innerHTML = "O"
                val.innerHTML = "X"
               }
               else{
                  document.getElementById("turn").innerHTML = "X"
                 val.innerHTML = "O"
               }
               counter++;
              }

              else{
                alert("You cannnot override  Move")
              }
              let symbol2=val.innerHTML;

              if(counter >= 5){
                const win=winner(symbol2)
               if(!win && counter ===9){
                draw()
               }
              }
            })
            $("#reset-game").on("click",function(){
                resetgame();
            })
          
        })