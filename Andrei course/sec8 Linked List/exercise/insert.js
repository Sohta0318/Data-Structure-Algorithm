// add a method insert() to the linked list that adds a node to the specified index.

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
    //Code here
    if(index > this.length){
      return 'You can not do that'
    }
    const newNode = {
      value,
      next: null
    }
let currentNode = this.head
let count = 0
while(count <= index){
if(count === index -1){
  newNode.next = currentNode.next
  currentNode.next = newNode
  break
}
  currentNode = currentNode.next
  count++
}
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1)
// myLinkedList.insert(2, 99)
// myLinkedList.insert(20, 88)
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.insert(30, 88));



