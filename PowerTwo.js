// function isPowerTWo(n){
//    if(n<1){
//       return false
//    }
//    while(n>1){
//       if(n % 2 !==0){
//          return false
//       }
//       return false
//    }
//    return true  
// }

// console.log(isPowerTWo(1));
// console.log(isPowerTWo(2));
// console.log(isPowerTWo(5));
// ----------------------------------------------------------- bitwis PowerTwoBitWise  --------------------------------------------------------

function isPOwerTwoBitwise (n){
   if(n<1){
      false
   }
   return (n&(n-1)) === 0

}