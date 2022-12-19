// are used with Constructors 
const set = new Set([1,2,3,]) ;

set.add(4)
set.add(4)
// as we know how to duplication of element is not possibles 
// set.delete(3)
console.log(set.size) 
set.clear()
// for(const item of set){
//    console.log(item);
// }