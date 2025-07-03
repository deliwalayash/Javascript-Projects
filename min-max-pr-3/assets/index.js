    
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
                   $("#random").addClass("highlight-box")
            })
            $("#max").on("click",function(){
                 $(".input-box").removeClass("highlight");
                  $(".btn").removeClass("highlight-box")
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
                if(max === -Infinity){
                        ans.innerHTML ="Please Enter Valid Input";
                        return;
                }
                    $(maxid).addClass("highlight")
                      $("#max").addClass("highlight-box")
                    ans.innerHTML = `Maximum Number is ${max}`;
            })
            $("#min").on("click",function(){
                $(".btn").removeClass("highlight-box")
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
                   if(min === Infinity){
                        ans.innerHTML ="Please Enter Valid Input";
                        return;
                }
                $(minid).addClass("highlight")
                  $("#min").addClass("highlight-box")
                 ans.innerHTML = `Minimum Number is ${min}`;
            })
            $("#search").on("click",function(){
                 ans.innerHTML ="";
                  $(".btn").removeClass("highlight-box")
                 let searchid=null;
                 for(let i = 1;i <=number ;i++){
                    if(document.getElementById(`num${i}`).value ===""){
                        ans.innerHTML ="Please Enter All inputs";
                        return;
                    }
                 }
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
                      $("#search").addClass("highlight-box")
            })
            $("#sum").on("click",function(){
                 ans.innerHTML ="";
                  $(".btn").removeClass("highlight-box")
                 let sum=0;
                  for(let i = 1;i <=number ;i++){
                    if(document.getElementById(`num${i}`).value ===""){
                        ans.innerHTML ="Please Enter All inputs";
                        return;
                    }
                 }
                  $(".input-box").removeClass("highlight");
                for(let i = 1;i <=number ; i++){
                    sum = sum + parseInt(document.getElementById(`num${i}`).value)
                }
                $("#sum").addClass("highlight-box")
                ans.innerHTML = `The sum of All number:${sum}`;
            })
            $("#clr").on("click",function(){
                 ans.innerHTML ="";
                  $(".btn").removeClass("highlight-box")
                  $(".input-box").removeClass("highlight");
                for(let i = 1;i <=number ; i++){
                    document.getElementById(`num${i}`).value= "";
                }
                  $("#clr").addClass("highlight-box")
            })
            $("#prime").on("click",function(){
                ans.innerHTML ="";
                 $(".btn").removeClass("highlight-box")
                 for(let i = 1;i <=number ;i++){
                    if(document.getElementById(`num${i}`).value ===""){
                        ans.innerHTML ="Please Enter All inputs";
                        return;
                    }
                 }
                   $(".input-box").removeClass("highlight");
                   for(let i = 1;i <=number;i++){
                    let prime2=parseInt(document.getElementById(`num${i}`).value);
                    let flag=1;
                    for(let j =2;j < prime2 ;j++ ){
                        if(prime2 % j ===0){
                            flag=0;
                            break;
                        }
                    }
                    let primeid;
                    if(flag === 1){
                         primeid=`#num${i}`;

                    }
                    $(primeid).addClass("highlight")
                      $("#prime").addClass("highlight-box")
                   }
            })
            $("#odd").on("click",function(){
                ans.innerHTML ="";
                 $(".btn").removeClass("highlight-box")
                  for(let i = 1;i <=number ;i++){
                    if(document.getElementById(`num${i}`).value ===""){
                        ans.innerHTML ="Please Enter All inputs";
                        return;
                    }
                 }
                $(".input-box").removeClass("highlight")
                for(let i = 1;i <=number ;i++){
                    let odd=parseInt(document.getElementById(`num${i}`).value);
                    if(odd % 2 !=0){
                        let oddid=`#num${i}`;
                        $(oddid).addClass("highlight")
                    }
                }
                  $("#odd").addClass("highlight-box")
            })
            $("#even").on("click",function(){
                ans.innerHTML ="";
                 $(".btn").removeClass("highlight-box")
                  for(let i = 1;i <=number ;i++){
                    if(document.getElementById(`num${i}`).value ===""){
                        ans.innerHTML ="Please Enter All inputs";
                        return;
                    }
                 }
                $(".input-box").removeClass("highlight")
                for(let i = 1;i <=number ;i++){
                    let even=parseInt(document.getElementById(`num${i}`).value);
                    if(even % 2 ===0){
                        let evenid=`#num${i}`;
                        $(evenid).addClass("highlight")
                    }
                }
                  $("#even").addClass("highlight-box")
            })
            $("#median").on("click",function(){
                ans.innerHTML ="";
                 $(".btn").removeClass("highlight-box")
                  for(let i = 1;i <=number ;i++){
                    if(document.getElementById(`num${i}`).value ===""){
                        ans.innerHTML ="Please Enter All inputs";
                        return;
                    }
                 }
                let sum=0;
                 $(".input-box").removeClass("highlight")
                   for(let i = 1;i <=number ; i++){
                    sum = sum + parseInt(document.getElementById(`num${i}`).value)
                }
                 let median=sum / number;
                 ans.innerHTML = `Average of All number is ${median}`
                   $("#median").addClass("highlight-box")
            })
            $("#refresh").on("click",function(){
                  $(".input-box").removeClass("highlight")
                let newnumber =parseInt(prompt("Enter Number of Boxes You want"))

                if(isNaN(newnumber) || newnumber <=0){
                    prompt("Invalid Input.Defaulting to 10 boxes")
                    newnumber=10;
                }

                number=newnumber;
                 $("#demo").html("");
                let box=document.getElementById("demo");
                for(let i = 1;i <=number;i++){
                    box.innerHTML += `<input type="text" id="num${i}" class="input-box">`
                }
                ans.innerHTML="";

            })
            

        })
