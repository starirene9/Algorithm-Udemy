// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) { // next default null
        this.data = data;
        this.next = next;
    }
}

class LinkedList { // only know the head node
    // access to the first node : head
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const node = new Node(data, this.head); // this.head를 next에 놓음
        this.head = node; // 새로 생긴 데이터의 헤드가 this.head가 되도
        // this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next; // next -> another node or nothing
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) { // next node가 없다면
                return node;
            }
            node = node.next;
        }
    }

    clear() {  // empty out the list node
        this.head = null; // clear out entire lists
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next; // move it to the 2nd head
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) { // 하나 밖에 없는 경우
            this.head = null; // remove
            return;
        }

        let previous = this.head; // 첫번째 노드
        let node = this.head.next; // 다음 노드
        // previous, node, node null -> the end
        while (node.next) { // iterating
            previous = node;
            node = node.next;
        } // 다음에 뭐가 없으면, 노드를 null 처리 해라.
        previous.next = null;
    }

    // getLast 함수를 사용할 것~!
    insertLast(data) {
        const last = this.getLast();

        if (last) {
            // There are some existing ndoes in our chain
            last.next = new Node(data);
        } else {
            // The chain is empty!
            this.head = new Node(data);
        }
    }

    getAt(index) {
        // if (!this.head) { // 없다면 진행하지 말것 : 아래 return null 때문에 삭제 해도 좋음 
        //     return null;
        // }

        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
}

// const list = new LinkedList();
// list.head = new Node(10);

module.exports = {Node, LinkedList};
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
