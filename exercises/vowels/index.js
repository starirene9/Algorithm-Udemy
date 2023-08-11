// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'. (모음)
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
   return matches ? matches.length : 0
}

module.exports = vowels;

// 1) includes
// const word = "Hellow there";
// word.includes("ellow") // true

// function vowels(str) {
//     let count = 0 ;
//     const checker = ['a', 'e', 'i', 'o', 'u'];
//
//     for (let char of str.toLowerCase()) { // 모두 소문자로 일단 바꿔줌
//         if (checker.includes(char)) { // includes 함수 사용
//             count ++;
//         }
//     }
//     return count;
// }

// 2) match
// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi)
//     // 정규화 =>g : we don't stop, i : character 대소문자 책임짐
//     return matches ? matches.length : 0;
//     // truthy : falthy
// }