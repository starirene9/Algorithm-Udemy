// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) { //123
        const reversed = n.toString().split('').reverse().join(''); // 숫자를 뒤집은 스트링 321-
        return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
// 1. toString 으로 만들고 전환해서 사용
// 2. Math.sign() number is positive -> 1 negatvie -> -1
// Math.sign(4000) // 1 Math.sign(-4000) // -1
// 3. parseInt -> string returns in number

//1)
// function reverseInt(n) { //123
//     const reversed = n.toString().split('').reverse().join(''); // 321-
//     return parseInt(reversed) * Math.sign(n); // 321 * -1
//     // n > 0 positive return 1 , n < 0 negative return -1
// }

//2)

//3)

//4)
