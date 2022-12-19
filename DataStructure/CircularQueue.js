class CircularQueue {
   constructor(capacity){
      this.items= new Array(capacity)
      this.capacity = capacity
      this.currentLenght = 0
      this.rear = -1
      this.front = -1
   } 
   isFull(){
      return this.currentLenght === this.capacity
   }
   isEmpty (){
      return this.currentLenght === 0 
   }
   enqueue(element){
      if(!this.isFull){
         this.rear = this.rear+1
      }
   }

}
