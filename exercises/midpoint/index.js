// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }
// middle ? half - l (less)
// strategy
// apply to even and odd number
// 1. define center node : slow(first node), fast(second node) two variables
// 2. start with head
// 3. slow + 1, fast + 2 elements
// 4. fast node no more ?  -> the end of the node
// 5. slow 노드가 가리키는게 mid point 임


function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(fast.next && fast.next.next) { // check next and next after that
        slow = slow.next;
        fast = fast.next.next; // jump for 2 step;
    }

    return slow;
}

module.exports = midpoint;
// 1)
// function midpoint(list) {
//     let slow = list.getFirst(); // list.head() is also okay
//     let fast = list.getFirst();
//
//     while(fast.next && fast.next.next) { // check next and next after that
//         slow = slow.next;
//         fast = fast.next.next; // jump for 2 step;
//     }
//
//     return slow;
// }