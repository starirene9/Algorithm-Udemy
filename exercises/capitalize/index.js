// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const arr = [];

    for (let word of str.split(' ')) {
        console.log(str.split(' '))  // [ 'hi', 'there,', 'how', 'is', 'it', 'going?' ]
        // 붙여쓰면 한 글자씩, 띄어쓰면 단어 단위로, 두번 띄어 쓰면 문장 단위로
        console.log(word[0]); // h t h i t (단어의 첫 글짜)
        console.log(word.slice(1));
        //slice : 첫 번째를 제한 나머지
        arr.push(word[0].toUpperCase() + word.slice(1));
        console.log("this",arr); // this [ 'Hi', 'There,', 'How', 'Is', 'It', 'Going?' ]
    }
    return arr.join(' ');
}
module.exports = capitalize;

//1)
// const word = "there"
// word[0].toUpperCase() // T
// word.slice(1) // here

// Make an empty array
// Split the input string by spaces to get an array
// for each word in the array
// Uppercase the first letter of the word
// join first letter with rest of the string
// push result into words array
// join words into a string and return it

// function capitalize(str) {
//     const words = [];
//
//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(' ');
// }
// module.exports = capitalize;

// function capitalize(str) {
//     const arr = [];
//
//     for (let word of str.split(' ')) {
//         console.log(str.split(' '))  // [ 'hi', 'there,', 'how', 'is', 'it', 'going?' ]
//         // 붙여쓰면 한 글자씩, 띄어쓰면 단어 단위로, 두번 띄어 쓰면 문장 단위로
//         console.log(word[0]); // h t h i t (단어의 첫 글짜)
//         console.log(word.slice(1));
//         //slice : 첫 번째를 제한 나머지
//         arr.push(word[0].toUpperCase() + word.slice(1));
//         console.log("this",arr); // this [ 'Hi', 'There,', 'How', 'Is', 'It', 'Going?' ]
//     }
//     return arr.join(' ');
// }
// module.exports = capitalize;
