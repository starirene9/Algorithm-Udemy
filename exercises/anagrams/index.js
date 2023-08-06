// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
    // 헐 이렇게 단순할 수가..
}

// helper function
function cleanString(str) {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
    // sort는 알파벳 순서로 정리해 준다.
}

module.exports = anagrams;

// 1) RegExp <- manipulate Strings : 정규식 표현
// const word = "HI THERE!!!"
// word.replace(/[^\w]/g, "").toLowerCase(); // hithere

// obj의 key를 빼내는 법
// const obj ={
// a: 1,
// b: 1,
// c: 1
// };
// Object.keys(obj); // 이렇게 나옴 ["a","b","c"]
// Object.keys(obj).length // 길이가 나옴

// 1)
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     console.log("함수를 통해 만들어짐 :", aCharMap); // { h: 1, e: 1, l: 2, o: 1 }
//     const bCharMap = buildCharMap(stringB);
//
//     // 길이가 다르면 애너그램이 아닙니다.
//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) { // different anagram
//         return false;
//     }
//     console.log('obj key length :', Object.keys(aCharMap).length); // 4
//
//     for (let char in aCharMap) { //object 꺼낼때는 for in
//         if (aCharMap[char] !== bCharMap[char]) {
//             console.log( 'obj 반복문으로 꺼냄:', aCharMap[char]); // 개수가 같은지 같지 않은지 확인
//             return false;
//         }
//     }
//     return true;
// }
//
// function buildCharMap(str) {
//     const charMap = {};
//
//     for(let char of str.replace(/[^\w]/g, '').toLowerCase()){  // 모든 특수문자, 공백 등을 제거하고, 모든 문자를 소문자로 통일
//         charMap[char] = charMap[char] + 1 || 1; // 문자 char의 빈도수를 계산하는 방법, falsy 일때 1 반환
//         // 해당 문자의 빈도수가 저장되어 있다면, charMap[char]의 값에 1을 더해 저장
//     }
//     return charMap;
// }

// 2)
// sort() // number 뿐만이 아니라 string 에서도 쓸 수 있고 alphabetic order 해줌
// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
//     // 헐 이렇게 단순할 수가..
// }
//
// // helper function
// function cleanString(str) {
//     return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
//     // sort는 알파벳 순서로 정리해 준다.
// }