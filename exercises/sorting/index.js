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

        for (let j = i + 1; j <arr.length ; j++){
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }
    return arr;
}
// Prove me Wrong Algorithm
// we assume i to indexOfMin : 가장 적은 숫자라고 가정
// show me with other numbers are smaller than this!
// less than the current element ? update indexofMin to the value less
// 작은 수를 indexofMin 에 대입해나가는 과정이다. 그리고 swap 하기

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
