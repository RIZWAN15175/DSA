// let data = [9,45,2,8,45,28,7,78,8,11,41,77]
// for(let i=0; i<data.lenght;i++){
//    document.write(data[i])
// }

// let x = 8 ;
// const result=document.write(data[x]) ;
// console.log(result);

let data = [60,30,10,67,40] ;
let newEl = document.getElementById("newEl").value ;
let position = document.getElementById("position").value;
for(let i=data.length ; i>=0 ;i--) {
   // console.log(i);
   // console.log(data[0]) ;
  if(i>position){
   data[i+1]=data[i];
   if(i==position){
      data[i]=newEl
   }
  }
}
console.log(data);

function insertEl (){
   let data = [60,30,10,67,40] ;

}