// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
}

module.exports = Queue;
// 1)
// class Queue {
//     constructor() {
//         this.data = [];
//     }
//
//     add(record) {
//         this.data.unshift(record);
//         // unshift 는 앞에서 부터 채워 줌
//     }
//
//     remove(){
//         return this.data.pop();
//     }
// }