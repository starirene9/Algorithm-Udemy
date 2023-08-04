// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) { //15

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

module.exports = fizzBuzz;

// modulo operator
// 9 % 3 === 0 // true
// 10 % 3 === 0 // false


// function fizzBuzz(n) {
//     for(let i = 1 ; i <= n; i++){
//         // 3과 5의 배수인지를 먼저 해줘야지 3의 fizz가 안나오고 이거 먼저 동작함
//         if(i % 15 === 0) {
//             console.log('fizzbuzz');
//         } else if(i % 3 === 0) { // else if 를 사용해야 fizz가 한번 더 안 찍힘
//             console.log('fizz');
//         } else if(i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }