function recursiveFacorial (n) {
   if (n===0) { 
      return 1
      
   }
  return n*recursiveFacorial(n-1)

}
console.log(recursiveFacorial(0));   //1
console.log(recursiveFacorial(2));  //1
console.log(recursiveFacorial(5));  //120

// formula 

// n! = n*(n-1)!