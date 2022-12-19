function recurseiveFibonacise (n) {
    if(n<2){
      return n
    }
   return recurseiveFibonacise(n-1) + recurseiveFibonacise(n-2)

}
console.log(recurseiveFibonacise(0));    //0
console.log(recurseiveFibonacise(1));    //1
console.log(recurseiveFibonacise(6 ));   //8