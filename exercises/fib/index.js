// --- Directions
//  피보나치 수열은 각 항목이 바로 이전 두 항목의 합으로 이루어진 수열입니다.
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3 , fib(6) === 8

function fib(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++){
        const a = result[i - 1]; // 마지막 값
        const b = result[i - 2]; // 마지막에서 두번째 값

        result.push(a+b);
    }
    console.log(result[n]);
    return result[n];
}

module.exports = fib;

// 1) linear runtime

// function fib(n) {
//     const result = [0, 1];
//
//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1]; // last one
//         const b = result[i - 2];
//
//         result.push(a + b);
//     }
//
//     return result[n];
// }