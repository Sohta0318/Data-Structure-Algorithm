// add a method remove() to the linked list that deletes a node to the specified index.

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      console.log('yes')
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

//   remove(index){
// if(index > this.length){
//   return 'This is not good'
// }
// let counter = 0
// let currentNode = this.head
// while(counter <= index){
//   if(counter === index -1){
//     const next = currentNode.next.next
//     console.log(next);
//     currentNode.next = next
// break
//   }
//   currentNode = currentNode.next
//   counter++
// }
// this.length--
// return this.printList();
//   }

remove(index){
  if(index > this.length){
  return 'This is not good'
}
const leader = this.traverseToIndex(index -1)
const next = leader.next.next
leader.next = next
this.length--
return this.printList()
}
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.insert(2, 99));
// console.log(myLinkedList.insert(20, 88));
console.log(myLinkedList.remove(2));




