// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (row === n ) {
        return;
    }

    if (level.length === 2 * n -1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    // midpoint
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if(midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    }else {
        add = ' ';
    }
    pyramid(n, row, level + add)
}

module.exports = pyramid;

// Math.floor

// iterate -> recursive solution
// iterate from 0 to n
// create an empty string 'level
// from 0 t ? column
// if the column should have a # -> add a space
// else add a space to 'level ->

// calculate the midpoint : center index
// const columns = [0, 1, 2, 3, 4];
// const row = 0;
//
// Math.floor((2 * n - 1) / 2)

// function pyramid(n) {
//     for (let row = 0; row < n; row++) {
//         const midpoint = Math.floor((2 * n - 1) / 2)
//         // calculate the midpoint : center index
//         let level = '';
//
//         for (let column = 0; column < 2 * n - 1; column) { // correct number of column
//             //2 -> 3 / 3 -> 5 / 4 -> 7 // two times - 1
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }


// 2) Pyramid 2 
// function pyramid(n, row = 0, level = '') {
//     if (row === n ) {
//         return;
//     }
//
//     if (level.length === 2 * n -1) {
//         console.log(level);
//         return pyramid(n, row + 1);
//     }
//
//     // midpoint
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     let add;
//     if(midpoint - row <= level.length && midpoint + row >= level.length) {
//         add = '#';
//     }else {
//         add = ' ';
//     }
//     pyramid(n, row, level + add)
// }