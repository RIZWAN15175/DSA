// factotril number means 1*2*3*4*5* = 120


// function factorial (n){
//    let result =  1
//    for (let i=2 ; i<=n ;i++ ){
//        result = result*i

//    }
//    return result
 
// }
// console.log(factorial(0));   //1
// console.log(factorial(1));  //1
// console.log(factorial(5));  //120 



// ================================ practiesed =============================

function fabinacci (n){
   let result = 1
   for(let i=2; i<=n; i++){
      result = result*i
   }
   return result 
}
console.log(fabinacci(0));
console.log(fabinacci(1));
console.log(fabinacci(5));