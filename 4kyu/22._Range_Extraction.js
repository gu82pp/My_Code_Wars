/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

*/

function solution(list) {

    if (!list || list.length === 0) {
        return "";
    }

    let result = [];
    let tmpArray = [list[0]];

    function processTmpArray() {
        if(tmpArray.length > 2) {
            result.push(tmpArray[0] + "-" + tmpArray[tmpArray.length - 1]);
        } else if(tmpArray.length > 0) {
            result.push(...tmpArray);
        }
    }

    for(let i = 1; i < list.length; i++) {
        if (list[i] !== list[i - 1] + 1) {
            processTmpArray();
            tmpArray = [list[i]];
        } else {
        tmpArray.push(list[i]);
        }
    }

    processTmpArray();
    return result.join(",");
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "result: -6,-3-1,3-5,7-11,14,15,17-20")
console.log(solution([1, 2, 3, 5, 7, 8, 9, 12]), "result: 1-3,5,7-9,12");