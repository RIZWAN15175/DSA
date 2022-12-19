function fabanacii (n){
   const feb = [0,1]
   for(i=2; i>n ;i++){
      feb[i]-feb[i-1]+feb[i-2]
   }
   return feb
}
console.log(fabanacii(5));

// n  denotes how many number in the sequence 