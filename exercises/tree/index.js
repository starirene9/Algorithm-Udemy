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

}

module.exports = {Tree, Node};

// let arr = [1,2,3];
//
// arr = arr.filter(element =>{
//    return element === 1;
// });
// filter 함수는 create new array