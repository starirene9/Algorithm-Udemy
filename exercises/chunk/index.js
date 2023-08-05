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
    const chunked = []; // 빈 배열이고 안에 배열을 담을 예정 [[],[]]

    for (let element of array) {
        const last = chunked[chunked.length - 1]; // 마지막으로 묶인 배열 []

        if(!last || last.length === size) { // last가 없는 경우, 또는 last의 길이가 주어진 size와 같은 경우
            chunked.push([element]); // 새로운 배열을 만들어 chunked 배열에 추가한다.
        }else { // 그렇지 않은 경우 => 즉 last 배열에 더 공간이 있는 경우
            last.push(element); // 요소를 last 배열에 추가한다. 추가할 때는 push!
        }
    }
    return chunked; //
}

module.exports = chunk;
// 주어진 배열을 일정한 크기로 묶어서 새로운 배열로 반환하는 기능을 수행합니다.
// create empty array to hold chunck called chunked
// for each element in the "unchunked" array
// retrieve the last element in chuncked
// if last element does not exist, or if its length is equal to chunk size
// push a new chunk into chunked with the current element
// else add the current element into the chunk

// 1)

// 2)