    //programme for palinfrome using str operation
    let str3="nayan"
    let newstr=str3.split("").reverse().join("")
    console.log(newstr)
    // console.log((str3.split("").reverse().join("")) ? true : false)
    let newstring=str3.split("").reverse().join("")
    console.log((str3 === newstr) ? true : false)

    if(newstr ==str3){
        console.log(true)
    }
    else{
        console.log(false)
    }

    let str4="nurses run"
    console.log(str4)
    let cleanedstr=str4.replace(/\s/g,"")
    console.log(cleanedstr)

    let newstr4=str4.split("").reverse().join("")
    console.log(newstr4)
    console.log((str4 === newstr4) ? true : false)
    