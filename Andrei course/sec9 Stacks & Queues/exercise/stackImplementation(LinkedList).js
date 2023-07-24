class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top
  }
  push(value){
    const newNode = new Node(value)
    const previous = this.top
    this.bottom = previous
    newNode.next = this.top
    this.top = newNode
    this.length ++
    return this
  }
  pop(){
const nextNode = this.top.next
this.top = nextNode
this.length--
return this
  }
  isEmpty(){
    if(!this.length || !this.top){
      return true
    }
    return false
  }
}

const myStack = new Stack();
console.log(myStack.push(2));
console.log(myStack.push(4));



//Discord
//Udemy
//google
