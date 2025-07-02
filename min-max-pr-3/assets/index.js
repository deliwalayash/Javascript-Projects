    
        $(document).ready(function(){
            let number =parseInt(prompt("Enter How Many Boxes"))
            if(isNaN(number) ||  number <= 0){
                alert("Invalid Number || Creating Default 10 boxes")
                number=10;
            }
             let box=document.getElementById("demo")
              for(let i = 1;i <= number;i++){
                    box.innerHTML += `<input type="text" id="num${i}" class="input-box">`
                }
            // let ipnum=document.getElementById("num")
           
            // let number=0;
            let ans=document.getElementById("ans")
            // $("#sub").on("click",function(){
            //     number=parseInt(ipnum.value);
            //     box.innerHTML = "";
            //     for(let i = 1;i <= number;i++){
            //         box.innerHTML += `<input type="text" id="num${i}">`
            //     }
            // })
            $("#random").on("click",function(){
                ans.innerHTML ="";
                $(".input-box").removeClass("highlight");
                 for(i = 1;i <=number;i++){
                    // let random=parseInt( (Math.random() *100));
                    document.getElementById(`num${i}`).value = parseInt(Math.random() *100);
                    // input.value = random;
                 }
            })
            $("#max").on("click",function(){
                 $(".input-box").removeClass("highlight");
                 ans.innerHTML ="";
                let max=-Infinity;
                let maxid=null;
                 for(i = 1;i <=number;i++){
                    let val =parseInt(document.getElementById(`num${i}`).value)
                    if(val > max){
                        max=val;
                        maxid=`#num${i}`
                    }
             
                 }
                    $(maxid).addClass("highlight")
                    ans.innerHTML = `Maximum Number is ${max}`;
            })
            $("#min").on("click",function(){
                 $(".input-box").removeClass("highlight");
                 ans.innerHTML ="";
                 let minid=null;
                let min=Infinity;
                for(let i = 1;i <=number;i++){
                    let val=parseInt(document.getElementById(`num${i}`).value)
                    if(val < min){
                        min=val;
                        minid=`#num${i}`;
                    }
                   
                }
                $(minid).addClass("highlight")
                 ans.innerHTML = `Minimum Number is ${min}`;
            })
            $("#search").on("click",function(){
                 ans.innerHTML ="";
                 let searchid=null;
                  $(".input-box").removeClass("highlight");
                let val=parseInt(prompt("Enter Value you want to search"));
                let flag=1
                for(let i = 1;i <= number;i++){
                    let ip=parseInt(document.getElementById(`num${i}`).value)
                    
                    if(ip === val){
                        flag=0;
                         ans.innerHTML="The number is in The list";
                         searchid=`#num${i}`;
                        break;
                    }
                }
                 if(flag === 1){
                        ans.innerHTML = "The number is not in the list";
                    }
                    $(searchid).addClass("highlight")
            })
            $("#sum").on("click",function(){
                 ans.innerHTML ="";
                  $(".input-box").removeClass("highlight");
                let sum = 0;
                for(let i = 1;i <=number ; i++){
                    sum = sum + parseInt(document.getElementById(`num${i}`).value)
                }
                ans.innerHTML = `The sum of All number:${sum}`;
            })
            $("#clr").on("click",function(){
                 ans.innerHTML ="";
                  $(".input-box").removeClass("highlight");
                for(let i = 1;i <=number ; i++){
                    document.getElementById(`num${i}`).value= "";
                }
            })
            

        })
