// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null ) { // next default null
        this.data = data;
        this.next = next;
    }
}

class LinkedList { // only know the head node
    // access to the first node : head
    constructor() {
        this.head =  null;
    }

    insertFirst(data){
        const node = new Node(data, this.head); // this.head를 next에 놓음
        this.head = node; // 새로 생긴 데이터의 헤드가 this.head가 되도록
        // this.head = new Node(data, this.head);
    }
}

// const list = new LinkedList();
// list.head = new Node(10);

module.exports = { Node, LinkedList };
// 1) ordered collection of data
// linked list - connected node : chain
// Head node & Tail Node

// const nodeOne = {
// data : 123
// };

// const nodeTwo = {
// data: 456
// }

// nodeOne.next = nodeTwo; // {"data": 456}

// insertFirst : add, no delete
// create new node : passing data, head와 insertFirst를 연결한다.
