// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    console.log("함수를 통해 만들어짐 :", aCharMap); // { h: 1, e: 1, l: 2, o: 1 }
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) { // different anagram
        return false;
    }
    console.log('obj key length :', Object.keys(aCharMap).length); // 4

    for (let char in aCharMap) { //object 꺼낼때는 for in
        if (aCharMap[char] !== bCharMap[char]) {
            console.log( 'obj 반복문으로 꺼냄:', aCharMap[char]); // 개수가 같은지 같지 않은지 확인
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for(let char of str.replace(/[^\w]/g, '').toLowerCase()){ // hithere
        charMap[char] = charMap[char] + 1 || 1; // ?
    }
    return charMap;
}
module.exports = anagrams;

// 1) RegExp <- manipulate Strings
// const word = "HI THERE!!!"
// word.replace(/[^\w]/g, "").toLowerCase(); // hithere
// generate chracter map
// counting number of keys , count the length of keys


// obj의 key를 빼내는 법
// const obj ={
// a: 1,
// b: 1,
// c: 1
// };
// Object.keys(obj); // 이렇게 나옴 ["a","b","c"]
// Object.keys(obj).length // 길이가 나옴
