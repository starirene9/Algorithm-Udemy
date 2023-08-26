// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// n=3 함녀 마지막에서 3번째꺼를 가리킴
// slow, fast 둘다 첫번째를 가리킴,
// slow는 한칸씩, fast는 n 만큼
// 마지막을 만났는가? 그러면 return slow 를 한다.

function fromLast(list, n) {
    // pointing the first element
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(n > 0) { // fast 만 그 수만큼 앞으로 나아감
        fast = fast.next;
        n--;
    }
    while(fast.next) { // fast가 다음으로 넘어갈 요소가 있을때까지 다음과 같이 이동
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

module.exports = fromLast;

// function fromLast(list, n) {
//     // pointing the first element
//     let slow = list.getFirst();
//     let fast = list.getFirst();
//
//     while(n > 0) { // fast 만 그 수만큼 앞으로 나아감
//         fast = fast.next;
//         n--;
//     }
//     while(fast.next) { // fast가 다음으로 넘어갈 요소가 있을때까지 다음과 같이 이동
//         slow = slow.next;
//         fast = fast.next;
//     }
//
//     return slow;
// }
