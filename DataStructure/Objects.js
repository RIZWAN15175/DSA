// =======================================================// ther are two ways to accessing the object elements in the arrays 
// const obj = {
//    name :"Bruce",
//    age :25 ,
//    "key-three":true
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj ["age"]);
// console.log(obj ["key-three"]);
// =============================================// the way to add items in the objects 
//  const obj = {
//       name :"Bruce",
//       age :25 ,
//     "key-three" : true 
// }
// obj.hobby = "football"
// console.log(obj);
// ===================================================== //the way to delete element in the arrays
// const obj = {
//    name : "sheikh",
//    age : 25
// }
// obj.hobby="football"
// delete obj.hobby
// console.log(obj);
// ============================================== object with this keywords 

// const obj = {
//    name : "sheikh",
//    age : 25 ,
//    sayMyname : function (){
//       console.log(this.name);
//    }
// }
// obj.sayMyname()

// ================================================= methods of an objects 
// keys()
// values()
// entries()

// const fruits = ["Bananas","Oranges","Apples","Mango"];
// const results = Object.keys(fruits) ;
// console.log(results);

const obj = {
   name : "Sheikh",
   age  : 25
}
// const res = Object.keys(obj) 
// const res = Object.values(obj) 
// const res = Object.entries(obj) 
console.log(res);