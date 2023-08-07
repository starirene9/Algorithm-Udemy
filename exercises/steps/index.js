// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the #(pound) character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
// correct number of empty space ' '

function steps(n, row = 0, stair = '') { // 전달 받는 수가 negative 일수도 있기에 default 값 정한다.

    if (n === row) {
        return; // 마지막에 작동
    }

    if (n === stair.length) {  // ''
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row) { // columns
        stair += '#';
    } else {
        stair += ' ';
    }
   steps(n, row, stair);

    // const add = stair.length <= row ? '#' : ' ';
    // steps(n, row, stair + add);

}


module.exports = steps;

//1) write out sudo code before you coding
// from 0 to n : iterate through rows
// create an empty string, stair
// from 0 to n (iterate through columns)
// * if the current column is equal to or less than the current row
// add a # to stair
// else
// add a space to stair
// console log stair

// *의 원리
// #
// r0 c0, r0 c1, r0 c2
// #      #
// r1 c0, r1 c1, r1 c2 => r숫자 c숫자가 같거나 r숫자가 c숫자보다 클때 #이 찍힌다.
// #      #        #
// r2 c0, r2 c1, r2 c2

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//
//         for (let column= 0; column < n ; column++){
//             if(column <= row) {
//                 stair +='#';
//             } else {
//                 stair += ' '; // empty space 가 있어야 한다.
//             }
//         }
//         console.log(stair);
//     }
// }

// Recursion(반복) Tips

// 1. Figure out the bare minimum pieces of information to represent your problem
// 2. Give reasonable defaults to the bare minimum pieces of info
// 3. Check the base case, Is there any work left to do? If not, return
// 4. Do some work. Call your function again, making sure the arguments have changed in some fashion

// function printNumber(n, dec = 1) { // default 값 정해 줌
//     if ( n === 0 ) {
//         return;
//     }
//
//     console.log(n);
//     printNumber(n - dec);
// }
//
// printNumber(10);

// if(row === n) then we have hit the end of our problem
// if the stair string has a length === n then we are at the end of a row
// if the lengthof the stair string is less than or equal to the row number we're working on, we add a #
// otherwise add a space

// function steps(n, row = 0, stair = '') { // 전달 받는 수가 negative 일수도 있기에 default 값 정한다.
//
//     if (n === row) {
//         return; // 마지막에 작동
//     }
//
//     if (n === stair.length) {  // ''
//         console.log(stair);
//         return steps(n, row + 1);
//     }
//
//     if (stair.length <= row) { // columns
//         stair += '#';
//     } else {
//         stair += ' ';
//     }
//     steps(n, row, stair);
//
//     // const add = stair.length <= row ? '#' : ' ';
//     // steps(n, row, stair + add);
//
// }