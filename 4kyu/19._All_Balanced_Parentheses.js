/*
Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

Examples
balancedParens(0) => [""]
balancedParens(1) => ["()"]
balancedParens(2) => ["()()","(())"]
balancedParens(3) => 
    [
    "()()()",
    "()(())",
    "(())()",
    "(()())",
    "((()))"
]
*/

function balancedParens(n) {
    const result = [];

    function backtrack(currentString, openCount, closeCount) {

        if (currentString.length === 2 * n) {
            result.push(currentString);
            return;
        }

        if (openCount < n) {
            backtrack(currentString + '(', openCount + 1, closeCount);
        }

        if (closeCount < openCount) {
            backtrack(currentString + ')', openCount, closeCount + 1);
        }
    }
  
    backtrack("", 0, 0);
    return result;
}

console.log(balancedParens(3))
console.log(balancedParens(4))
console.log(balancedParens(5))