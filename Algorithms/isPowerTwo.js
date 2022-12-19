// function isPOwerTwo (){
//    if (n < 1){
//       false
//    }
//    while(n>2){
//       if (n % 2 !== 0){
//          return false
//       }
//       n=n/2
//    }
//    return true

// }
// console.log(isPOwerTwo(1));
// console.log(isPOwerTwo(2));
// console.log(isPOwerTwo(5));


// =============================================================== isPower Of Two ====================================================

function isPowerTwo (){ 
   if(n < 2){
      false
   }
   while(n>2){
      if (n>2){
         if (n% 2 !==0){
            return false
         }
         n=n/2
      }
      return true
   }
}
console.log(isPowerTwo(1));
console.log(isPowerTwo(2));
console.log(isPowerTwo(5));