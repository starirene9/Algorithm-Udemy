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

    // reuse your code , corner cases exist
    removeAt(index) {
        if (!this.head) {
            return null;
        }

        if (index === 0) { // index 가 첫 번째인 경우
            this.head = this.head.next; // 바로 remove 해버림
            return;
        }

        const previous = this.getAt(index - 1); // 이전 것
        if (!previous || !previous.next) { // 이전 index 숫자가 없다면 혹은 다음숫자가 없다면 
            return;
        }
        previous.next = previous.next.next; // 해당 index의 다음것으로 연결해주면 자연적으로 remove가 됨
    }

    insertAt(data, index) {
        // nothing
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        // index 0인 경우
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        // middle element
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) { // fn은 사용자가 forEach 함수를 호출할 때 전달한 함수 : 두 개의 인자를 받음
        let node = this.head;
        let counter = 0;

        while (node) {  // 리스트의 끝까지 반복
            fn(node, counter); // 지정한 함수(fn)를 현재 항목(node)과 카운터 값(counter)과 함께 실행합니다.
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;  // 리스트의 첫 번째 항목부터 시작합니다.
        while (node) {
            yield node; // 현재 항목(node)을 반환합니다.
            // yield는 제너레이터 함수 내에서 값을 생성하거나 반환하는 역할을 합니다. 제너레이터 함수는 호출될 때마다 실행되는데, yield를 만나면 실행이 일시 중지되고 해당 값을 반환
            // yield node;는 연결 리스트의 각 항목을 순회하면서 현재 항목인 node를 반환하는 역할
            node = node.next;
        }
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
