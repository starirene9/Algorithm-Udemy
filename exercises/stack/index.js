// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
       this.data = []; // initialize array : hold
    }
    push(record){ // push method
        this.data.push(record); // last record
    }
    pop(){
        return this.data.pop();
    }
    peek(){ // return the last record
        return this.data[this.data.length - 1];
    }

}

module.exports = Stack;

//1)
// order which items are added
// que : FIFO : first in first out
// stack : FILO : first in last out

// push : add a record to the stack
// pop : remove the top record in the stack
// peek : return the top record without popping it
// the only difference : 나갈때 다름!

// class Stack {
//     constructor() {
//         this.data = []; // initialize array : hold
//     }
//     push(record){ // push method
//         this.data.push(record); // last record
//     }
//     pop(){
//         return this.data.pop();
//     }
//     peek(){ // return the last record
//         return this.data[this.data.length - 1];
//     }
// }


