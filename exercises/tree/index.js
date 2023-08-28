// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) { // 1
        // this.children 배열을 업데이트하는 함수
        this.children = this.children.filter(node => {
            return node.data !== data; // does not equal // 2반환
            //  주어진 data 값과 같지 않은 모든 노드들만 남겨두고,
            // data 값을 가진 노드는 배열에서 제거
        })
    }
    // filter 함수는 배열의 각 요소에 대해 주어진 조건을 검사하고, 조건을 만족하는 요소만 새로운 배열로 반환
}

class Tree {
    constructor(){
        this.root = null;
    }

    // 너비 우선 탐색
    traverseBF(fn){
        const arr = [this.root];
        while(arr.length){ // arr has something in it
            const node = arr.shift(); // shift <- take out the first element of the array

            arr.push(...node.children); // spread grammar : 벳겨서 넣어줌
            // 현재 노드의 자식 노드들을 arr 배열에 추가 :  다음 반복에서 자식 노드들이 탐색 대상
            // for(let child of node.children){
            //     arr.push(child);
            // }
            fn(node); // 주어진 함수 fn을 현재 노드 node에 대해 실행
        }
    }

    //깊이 우선 탐색 : 너비랑 다르게 자식들을 뒤가 아닌 앞쪽에 붙여줌 ㅎ
    traverseDF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            arr.unshift(...node.children); // shift의 반대로 앞에 붙여줌
            fn(node);
        }
    }

}

module.exports = {Tree, Node};

// let arr = [1,2,3];
//
// arr = arr.filter(element =>{
//    return element === 1;
// });
// filter 함수는 create new array