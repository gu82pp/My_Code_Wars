/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
    const arrayLength = arr.length;
    let firstNumber = arr[0];

    if(firstNumber !== arr[1] && firstNumber !== arr[2]) {
        return firstNumber;
    } 

    if(firstNumber !== arr[1] && firstNumber === arr[2]) {
        return arr[1];
    } 

    for (let i = 2; i < arrayLength; i++) {
        if (arr[i] !== firstNumber) {
            return arr[i];
        }
    }
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 0, 0, 0.55, 0, 0 ])); // 0.55    
console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 0, 0, 1 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);