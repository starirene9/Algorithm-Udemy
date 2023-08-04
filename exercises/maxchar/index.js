// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) { // abcccccccd
   const obj ={};
   let count = 0;
   let maxKey = '';

   for(let char of str) { // str이나 array는 for of 사용
       if(!obj[char]){
           obj[char] = 1;
       } else{
           obj[char]++;
       }
       console.log(obj);
   }

   for( let char in obj) {
       if(obj[char] > count) {
           count = obj[char];
           maxKey = char;
       }
       return maxKey;
   }
}

module.exports = maxChar;


// What is the most common character in the string?
// Does string A have the same characters as string B?
// Does the given string have any repeated characters in it?

// function maxChar(str) { // abcccccccd
//     const obj = {}; // 빈 obj 선언
//     let max = 0;
//     let maxChar = '';
//     // for of 는 array or string 만
//     for(let char of str) { // 반복문으로 문자 하나씩 빼기
//         obj[char] = obj[char] +1 || 1;
//     }
//     console.log(obj);
//     // for in 은 obj 만
//     for (let char in obj) {
//         if (obj[char] > max) {
//             max = obj[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }
