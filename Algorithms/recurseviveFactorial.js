function recursesiveFactorial (n){
    if (n===0){
      return 1
    }
   return n*recursesiveFactorial(n-1)

}
console.log(recursesiveFactorial(0)); //1
console.log(recursesiveFactorial(1)); //1
console.log(recursesiveFactorial(5)); //120
console.log(recursesiveFactorial(6)); //120