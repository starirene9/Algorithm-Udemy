// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // to get an access fo the index
    for (let i=0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i -1); j++) { // inner forloop
            // 인접한 두 원소를 비교하여 정렬 수행
            if(arr[j] > arr[j + 1]) { // 뒤의 숫자보다 앞의 숫자가 더 크다면
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            //      컵처럼 옮겨담는 즉 스위치 하는 과정
            }
        }
    }
    return arr;
//     리턴하는 것을 잊지 말거라~!
}
// less efficient algorithm
// 옆의 숫자와 비교해서 큰 수를 뒤로 빼고
// arr.length - 1해서 똑같이 반복
// 배열의 크기가 큰 경우에는 비효율적이므로,
// 대부분의 실제 애플리케이션에서는 다른 정렬 알고리즘을 사용하는 것이 좋습니다.

function selectionSort(arr) {
    for (let i = 0; i <arr.length; i++) {
        let indexOfMin = i; // prove me wrong
        // i 가 가장 작은 수라고 가정 : the lowest value
        for (let j = i + 1; j <arr.length ; j++){
            // next element classic for 문
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            //     더 적은 수 j를 발견하면 indexOfMin 에 넣음
            }
        }
        if (indexOfMin !== i) {
            // not the same? then swap login
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }
    // Don't forget~!
    return arr;
}
// Prove me Wrong Algorithm
// we assume i to indexOfMin : 가장 적은 숫자라고 가정
// show me with other numbers are smaller than this!
// less than the current element ? update indexofMin to the value less
// 작은 수를 indexofMin 에 대입해나가는 과정이다. 그리고 swap 하기

function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center); // 잘라서 복사해서 새로 배열을 만들고 center 전까지 자른다.
    const right = arr.slice(center); // from center to the end

    // recursion is working on here
    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
    const results = [];

    while(left.length && right.length){
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
