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
function memoize(fn){ // memoize 함수는 다른 함수(fn)를 인자로 받습니다.
    // storage area
    const cache = {}; // 객체를 정의하여 계산 결과를 저장할 공간

    return function(...args) { // take all the arguments into array
        if (cache[args]){ // 만약 cache 객체에 이미 해당 인자들에 대한 결과가 있다면, 해당 결과를 반환
            return cache[args];
        }
        // 그렇지 않다면, fn 함수를 호출하여 결과를 계산
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function slowFib(n) {
    if (n < 2 ){
        return n;
    }
    return fib( n - 1 ) + fib( n - 2);
}

const fib = memoize(slowFib);
// memoize 함수를 활용하여 slowFib 함수를 최적화한 함수
// 중복 계산을 피하고, 이미 계산한 결과를 재사용하여 계산 속도를 향상
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

// 2) Exponential time : dramatic increase

// function fib(n) {
//     if(n < 2) { // recursion
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2);
// }

// 3) memoization
// Store the arguments of each function call along with the result.
// If the function is called again with the same arguments, return the precomputed result,
// rather than running the function again
// 메모이제이션은 이전에 계산한 결과를 저장하고 재사용함으로써 계산 속도를 높이는 기법



