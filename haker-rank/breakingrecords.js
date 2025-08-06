function breakingRecords(scores) {
    
    let count=0
    let count1=0
    
    let min = scores[0]
    let max=scores[0]
    
    for(let i = 1;i < scores.length;i++){
        if(scores[i] > max){
            max=scores[i]
            count++
        }
        
        if(scores[i] < min){
            min=scores[i]
            count1++
        }
    }
    
    let arr=[]
    
    arr.push(count)
    arr.push(count1)
    
    return arr

}