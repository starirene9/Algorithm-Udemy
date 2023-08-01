// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {

}

module.exports = reverse;

//  reverse 함수 이용하기 -> array에서만 사용가능
// 1. turn str into an array
// 2. call reverse method on the array
// 3. join the array back into a string
// 4. return the result

// function reverse(str) {
//     // const arr = str.split(''); // // ['h', 'e', 'l', 'l', 'o']로 변환되서 arr에 저장
//     // arr.reverse(); // flip
//     // return arr.join(''); // join all these into String / arr을 다시 문자열로 변환 : olleh"라는 최종 결과 문자열이 반환
//
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// reverse 함수 쓰지 않는 2번째 방법
// 1. create an empty string called reversed
// 2. for each character iin the provided string -> take the character and add it to the start of reversed
// 3. return the variable reversed

// function reverse(str) {
//     let reversed = '';
//     // avoid classic for loop , use for of syntax
//     for (let character of str) { // str : iterable obj
//         reversed = character + reversed;
// debugger
//     }
//     return reversed;
// }
// reverse('hamburger'); // debug시 이것도 넣어 줄 것~!

// 3.
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev,'') // single string value
//   // split 함수 : 문자열 분리
//   // reduce 함수 : 배열을 단일 값으로 축소, 순회하면서 누적값을 유지하며 연산 수행
//   // reduce((first,second)=>,initialValue)
// }

// 4. Debugger
// 1. cd reversestring ->
// 2. node inspect index.js
// 3. c : continue -> until you see debugger
// 4. repl
// 5. control c  : to leave

// function reverse(str) {
//   // debugger; // pause execution
//   return str.split('').reduce((rev, char)=> char + rev, '')
// }
//
// // reverse('asdf'); // debugger시 이것도 써줄것
//
// module.exports = reverse;