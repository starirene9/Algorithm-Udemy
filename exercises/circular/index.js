// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;  // 전의 것을 가리킴
//   circular(l) // true
// infinite nature


function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

module.exports = circular;

// function circular(list) {
//     //facing first element of the list
//     let slow = list.getFirst(); // 1 loop
//     let fast = list.getFirst(); // 2 loops
//
//     // while loop doesn't have en end to it
//     while(fast.next && fast.next.next){
//         // define it first
//         slow = slow.next;
//         fast = fast.next.next;
//
//         if(slow === fast){
//             return true;
//         }
//     }
//     return false;
// }
