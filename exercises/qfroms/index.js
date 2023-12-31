// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(data){
        this.first.push(data);
    }

    remove(){
        while (this.first.peek()) { // 첫번째 stack의 마지막이 남아 있을 때 까지
            this.second.push(this.first.pop()); //뒤의 것을 second stack에 넣어라
        }

        const data = this.second.pop();
        console.log(data)

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return data;
    }

    peek() {
        while(this.first.peek()) {
           this.second.push(this.first.pop());
        }
        const data = this.second.peek();

        while(this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return data;
    }
}


module.exports = Queue;


// 1) First In First Out
// A : pop and push -> B -> pop from B

// class Queue {
//     constructor() {
//         this.first = new Stack();
//         this.second = new Stack();
//     }
//
//     add(data){
//         this.first.push(data);
//     }
//
//     remove(){
//         while (this.first.peek()) {
//             this.second.push(this.first.pop());
//         }
//
//         const data = this.second.pop();
//
//         while (this.second.peek()) {
//             this.first.push(this.second.pop());
//         }
//         return data;
//     }
//     peek() {
//         while(this.first.peek()) {
//             this.second.push(this.first.pop());
//         }
//         const data = this.second.peek();
//
//         while(this.second.peek()) {
//             this.first.push(this.second.pop());
//         }
//         return data;
//     }
// }