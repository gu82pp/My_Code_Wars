/*

Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the largest 'slide downs' are 3 + 7 + 4 + 9 = 23, and 10 + 20 + 10 + 90 = 130.

Your task is to write a function that takes a pyramid representation as an argument and returns its largest 'slide down'. For example:

With the input [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]], your function should return 23.
With the input [
    [10], 
    [10, 20], 
    [10, 10, 20], 
    [10, 90, 10, 20]
], your function should return 130.
*/

function longestSlideDown(pyramid) {

    let pyramidLength = pyramid.length;

    for (let line = 1; line < pyramidLength; line++) {
        for (let i = 0; i < pyramid[line].length; i++) {
            let leftParent = pyramid[line - 1][i - 1] || 0;
            let rightParent = pyramid[line - 1][i] || 0;
            pyramid[line][i] += Math.max(leftParent, rightParent);
        }
    }

    return Math.max(...pyramid[pyramidLength - 1]);
    
}

console.log(longestSlideDown([
    [10], 
    [10, 20], 
    [10, 10, 20], 
    [10, 90, 10, 20]
]));