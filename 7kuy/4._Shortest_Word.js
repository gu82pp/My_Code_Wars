/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s) {

    let words = s.split(' ');
    let minLength = 0;

    for (let word of words) {
        if (minLength === 0 || word.length < minLength) {
            minLength = word.length;
        }
    }
    return minLength;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); // 3
console.log(findShort("Let's travel abroad shall we")); // 2