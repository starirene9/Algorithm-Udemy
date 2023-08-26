// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.

// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.

// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

// 이진트리 : Binary Search Tree
// value/data/key
// left & right
// value > left.value , value <right.value
// using recursion
// left or right
// reach the bottom of the tree

class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }

  insert(data) {
      if(data < this.data && this.left) {
          this.left.insert(data); // 왼쪽 아래 노드가 있는경우 insert한다.
      }
      else if(data < this.data) {
          this.left = new Node(data); // 왼쪽 아래 노드가 없는 경우 만들어서 들어감
      }
      else if (data > this.data && this.right){
          this.right.insert(data);
      }
      else if(data > this.data) {
          this.right = new Node(data);
      }
  }

 // Does this treen cotains 3?
  contains(data) {
       if(this.data === data) {
       return this;
       }
       if(this.data < data && this.right) {
           return this.right.contains(data);
       } else if(this.data > data && this.left) {
           return this.left.contains(data);
       }
      return null;
  }
}

module.exports = Node;

// contains(data) {
//     if(this.data === data) {
//         return this; // returning entire node
//     }
//     if(this.data < data && this.right) {  // rhs tree : truthy
//         return this.right.contains(data); // recursion -> return statemnet
//     } else if (this.data > data && this.left) {
//         return this.left.contains(data);
//     }
//
//     return null; // data not exist inside of the tree
// }