class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.array = []
  }
  peek() {
    return this.array[this.array.length -1];
  }
  push(value){
    return this.array.push(value)
  }
  pop(){
return this.array.pop()
  }
  isEmpty(){
    return this.array.length === 0 ? true: false
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.isEmpty());


//Discord
//Udemy
//google
