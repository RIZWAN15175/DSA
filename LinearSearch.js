function LineaeSearch (arr,target){
   for(let i=0; i<arr.lenght;i++){
      if(arr[i]===target){
         return i
      }
   }
   return -1

}
console.log(LineaeSearch([-5,2,10,4,6],10) );
console.log(LineaeSearch([-5,2,10,4,6],6))  ;
console.log(LineaeSearch([-5,2,10,4,6],20)) ;