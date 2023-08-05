// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const bigArray = [];
    let index = 0; // 배열을 어디까지 자를지 나타내는 변수

    // while 루프를 사용해서 원래 배열을 작은 그룹으로 나눈다.
    while(index < array.length){ // index가 원래 배열의 길이보다 작은 동안에만 실행합니다.
        bigArray.push(array.slice(index, index + size)); //index부터 index + size 까지의 요소들을 잘라서 새로운 배열을 만들어
        // 그리고 bigArray 에 추가해
        index += size;
    }
    return bigArray;
}

module.exports = chunk;

// 이렇게 해서 원래의 긴 물건들의 리스트를 주어진 규칙(각 그룹에 들어갈 수 있는 최대 물건의 개수)에 따라 작은 그룹들로 나누는 것이 이 코드의 목적입니다.
// 주어진 배열을 일정한 크기로 묶어서 새로운 배열로 반환하는 기능을 수행

// 1)
// function chunk(array, size) {
//     const bigGroups = []; // 물건들을 담을 빈 배열 [[],[]]
//
//     for (let item of array) { // 배열에서 물건들을 하나씩 꺼내본다.
//         const lastGroup = bigGroups[bigGroups.length - 1]; // 마지막 그룹
//
//         if(!lastGroup || lastGroup.length === size) { // 아직 그룹이 없거나, 마지막 그룹이 가득 차 있는 경우
//             bigGroups.push([item]); // [새로운 그룹]을 만들고 현재 물건을 그룹에 추가한다.
//         } else { // 마지막 그룹에 아직 공간이 남아 있으면,
//             lastGroup.push(item); // 현재 물건을 마지막 그룹에 추가한다.
//         }
//     }
//     return bigGroups; //
// }

// function chunk(array, size) {
//     const bigArray = []; // 1. 배열을 담을 큰 배열 만들어주기
//
//     for(let item of array) { // 어레이에 아이템들을 for 문으로 꺼내주기
//         const miniArray = bigArray[bigArray.length-1]; // 안에 들어갈 배열 선언하기 = 큰 배열의 마지막 배열
//
//         if(!miniArray || miniArray.length === size){ // 만약 배열이 없거나, 마지막 배열의 길이가 사이즈에 꽉 차게 되면
//             bigArray.push([item]); // 큰 배열에다가 아이템을 넣은 배열을 만들어 준다.
//         }else{ // 그렇지 않으면 즉 마지막 배열이 비어있다면
//             miniArray.push(item); // 마지막 배열에다가 아이템을 담아라
//         }
//     }
//     return bigArray;
// }

// 2)
// const letters =['a','b','c','d','e']
// letters.slice(0,3) // ['a','b','c']
// letters.slice(1,3) // ['b','c'] // 해당숫자에서~ 마지막 숫자 - 1

// 큰 빈 배열을 만들고
// 반복문을 만들고
// index, index + size
//