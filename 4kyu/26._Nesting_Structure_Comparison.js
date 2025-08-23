/*
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.
*/

Array.prototype.sameStructureAs = function (other) {
    if (!(other instanceof Array)) {
        return false;
    }

    if (this.length !== other.length) {
        return false;
    }

    for (let i = 0; i < this.length; i++) {
        if ((this[i] instanceof Array) && (other[i] instanceof Array)) {
            if (!this[i].sameStructureAs(other[i])) {
                return false;
            }
        } else if ((this[i] instanceof Array) || (other[i] instanceof Array)) {
            return false;
        }
    }

    return true;
};


console.log([1,1,1].sameStructureAs([2,2,2]), "[1,1,1] same as [2,2,2]");

console.log([1,[1,1]].sameStructureAs([2,[2,2]]), "[1,[1,1]] same as [2,[2,2]]");
console.log([1,[1,1]].sameStructureAs([[2,2],2]), "[1,[1,1]] not same as [[2,2],2]");
console.log([1,[1,1]].sameStructureAs([2,[2]]), "[1,[1,1]] not same as [2,[2]]");

console.log([[[],[]]].sameStructureAs([[[],[]]]), "[[[],[]]] same as [[[],[]]]");
console.log([[[],[]]].sameStructureAs([[1,1]]), "[[[],[]]] not same as [[1,1]]");

console.log([1,[[[1]]]].sameStructureAs([2,[[[2]]]]), "[1,[[[1]]]] same as [2,[[[2]]]]");

console.log([].sameStructureAs(1), "[] not same as 1");
console.log([].sameStructureAs({}), "[] not same as {}");

console.log([1,'[',']'].sameStructureAs(['[',']',1]), "[1,'[',']'] same as ['[',']',1]");

console.log([1,2].sameStructureAs([[3],3]), "[1,2] not same as [[3],3]" );