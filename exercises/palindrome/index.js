// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   뒤집어도 똑같은 경우를 palindrome 이라고 한다.
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}


module.exports = palindrome;

// 1) reversestring 사용하기
// function palindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// 2) every() 함수 사용하기 : is every value greater than 5?
// array.every((val)=> val>5); // every true -> true, single one false -> false
// a b c b a // 서로 끝과 끝을 비교한다 : double comparison
// function palindrome(str) {
//     return str.split('').every((char, i)=>{ // index = i = 0
//         return char === str[str.length-i-1] // 해당 글자와 반대편 뒷편의 글자가 모두 같은지 검사해서 모두 같으면 true
//     });
// }


