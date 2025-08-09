/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function(arr) {
    const arrayLength = arr.length;

    if( arrayLength === 0) {
        return 0;
    }

    let allNegative = true;

    for (let i = 0; i < arrayLength; i++) {
        if (arr[i] > 0) {
            allNegative = false;
            break;
        }
    }   

    if (allNegative) {
        return 0;
    }

    let maxSum = 0;
    let resultArray = []

    for (let start = 0; start < arr.length; start++) {
        for (let end = start; end < arr.length; end++) {

            const subarray = arr.slice(start, end + 1);
            let subarraySum = 0;

            for (let k = start; k <= end; k++) {
                subarraySum += arr[k];
            }

            if(subarraySum > maxSum) {
                maxSum = subarraySum;
                resultArray = subarray;
            }
        }
    }

    return maxSum;

}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // should be 6: [4, -1, 2, 1]
