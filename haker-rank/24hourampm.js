function timeConversion(s) {
    
    let str=s.slice(-2)
    
    let hour=s.slice(0,2)
    let newhour
    if(str == "AM"){
        if(hour =="12"){
            newhour=0
        }
        else{
             newhour = parseInt(hour)
        }  
    }
    if(str =="PM"){
        if(hour =="12"){
            newhour=12
        }
        else{
            newhour = 12 + parseInt(hour)
        }
    }
    let formatedhour
    if(newhour < 10){
        formatedhour = "0"+newhour.toString()
    }
    else{
        formatedhour=newhour.toString()
    }
    // let finalhour=newhour.toString().padStart(2,"0")
    let rest = s.slice(2,8)
    
    return formatedhour+rest

}