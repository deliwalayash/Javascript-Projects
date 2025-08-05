function catAndMouse(x, y, z) {
    
    
    let ans1=Math.abs(x-z)
    let ans2=Math.abs(y-z)
    
    if(ans1 == ans2){
        return "Mouse C"
    }
    else if(ans1 > ans2){
        return "Cat B"
    }
    else{
        return "Cat A"
    }


}
