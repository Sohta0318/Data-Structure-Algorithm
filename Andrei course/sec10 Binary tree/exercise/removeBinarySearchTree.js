class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    //Code here
    const newNode = new Node(value)
    let currentNode = this.root
if(!this.root){
  return this.root = newNode
}else{
while(true){
  if(currentNode.value < value){
if(!currentNode.right){
  return currentNode.right = newNode
}else{
  currentNode = currentNode.right
}
  }else{
    if(!currentNode.left){
      return currentNode.left = newNode
    }else{
      currentNode = currentNode.left
    }
  }
}
}

  }
  lookup(value){
    //Code here
    let current = this.root
    while(current){
      if(current.value === value){
        return current
      }else if(current.value < value){
current = current.right
}else{
  current = current.left
}
    }
  }
  remove(value){
    let currentNode = this.root
    if(!currentNode){
      return null
    }
    while(true){
      if(currentNode.value === value){
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





