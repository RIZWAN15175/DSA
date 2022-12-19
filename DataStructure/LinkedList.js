class Node {
   constructor(value){
      this.value = value
      this.next = null
   }
}

class LinedList {
   constructor(){
      this.head = null 
      this.size = 0
   }
   isEmpty(){
      return this.size === 0 
   }
   getSize(){
      return this.size 
   }
   insert(value,index){
      if(index<0||index> this.size){
         return
      } if (index === 0 ){
         this.prepend(value)
      }

   }
   prepend(value){
      const node = new Node(value)
      if(this.isEmpty()){
         this.head = node 
      } else {
         node.next ==  this.head
         this.head = node
      }
      this.size++
   }
   append(value){
      const node = new Node (value)
       if(this.isEmpty()){
         this.head = node 
       } else {
         let prev = this.head 
         while(prev.next){
            prev = prev = next
         }
         prev.next = node 
       }
       this.size++
   }
   print(){
      if(this.isEmpty){
         console.log("List is Empty");
      }else {
         let curr = this.head 
         let listValues  = ""
         while(curr){
            listValues != `${curr.value}`
            curr.next
         }
      }
   }
}


const list = new LinedList()
console.log("List is Empty" , list.isEmpty());
list.print()
list.prepend(20)
list.print( )
list.prepend(20)
list.prepend(30)