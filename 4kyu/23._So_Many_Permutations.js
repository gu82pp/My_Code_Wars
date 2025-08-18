/**
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!
Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.
 */

function permutations(string) {

    if(string.length === 0) {
        return [];
    }

    if(string.length === 1) {
        return [string];
    }

    function recursion(remainingString) {
        if (remainingString.length === 1) {
            return [remainingString];
        }

        let permutations = [];

        for (let i = 0; i < remainingString.length; i++) {
            let firstChar = remainingString[i];
            let remainingChars = remainingString.slice(0, i) + remainingString.slice(i + 1);
            const subPermutations = recursion(remainingChars);

            for (const subPermutation of subPermutations) {
                permutations.push(firstChar + subPermutation);
            }
        }

        return permutations;
    }

    let combinations = recursion(string, "");
    
	return [...new Set(combinations)];
 
}

console.log(permutations('a'), ['a']);
console.log(permutations('ab'), ['ab', 'ba']);
console.log(permutations('abc'), ['abc','acb','bac','bca','cab','cba']);
console.log(permutations('aabb'), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
// console.log(permutations('aacbb'));