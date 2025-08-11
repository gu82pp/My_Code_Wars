/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {

    let result = []
    let zeroCount = 0;

    for(element of arr) {
        if(element !== 0) {
            result.push(element);
        } else {
            zeroCount++;
        }
    }

    for(let i = 0; i < zeroCount; i++) {
        result.push(0);
    }

    return result;
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))