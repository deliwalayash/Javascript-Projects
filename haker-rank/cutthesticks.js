function cutTheSticks(arr) {
    
    let arr1=[]
    
   
    
    while(arr.length !=0){
        arr1.push(arr.length)
        
        let min=Math.min(...arr)
        
        arr=arr.map((data)=> data=data-min).filter((data) => data !=0)
        
        
    }
    
    return arr1
    
    
}
