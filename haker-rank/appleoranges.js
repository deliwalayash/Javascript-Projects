function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    let count=0
    let count2=0
    let d
    
    for(let i=0;i < apples.length;i++){
        d= a + apples[i]
        if(d >=s && d <=t){
            count++
        }
    }
    
    let d2
    
    for(let i = 0;i < oranges.length;i++){
        d2= b+ oranges[i]
        if(d2>= s && d2<=t){
            count2++
        }
    }
    console.log(count)
    console.log(count2)

}