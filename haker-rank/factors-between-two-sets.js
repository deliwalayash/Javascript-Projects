function getTotalX(a, b) {
    
    let min=Math.min(...b)
    
    let arr=[]
    let flag
   for(let i =1;i <= min;i++){
    for(let j = 0;j < a.length ;j++){
        flag=0
        if(i % a[j] != 0){
            flag=1
            break;
        }
    }
    if(flag ==0){
        arr.push(i)
    }
   }
   

   
   let arr2=[]
   let flag2
   for(let i = 0;i < arr.length;i++){
    for(let j = 0;j < b.length;j++){
        flag2=0
        if(b[j] % arr[i] !=0){
            flag2=1
            break;
        }
    }
    if(flag2 ==0){
        arr2.push(arr[i])
    }
   }
   
  
  return arr2.length
}