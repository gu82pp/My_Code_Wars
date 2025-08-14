/*

Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!

Usage of BigInt is disallowed and will be checked in the full test suite.
*/

function multiply(a, b) {

    a = removeLeadingZeros(a);
    b = removeLeadingZeros(b);

    if (a === "" || b === "") return "0";
    if (a === "1") return b;
    if (b === "1") return a;

    let digitsArray = [];
    let memory = 0;

    let stringsToSum = [];
    let startZero = "";

    let short = "";
    let long = "";
    
    if(a.length < b.length) {
        short = a;
        long = b;
    } else {
        short = b;
        long = a;
    }

    for(let i = (short.length - 1); i >= 0; i--) {

        let tmpString = "" + startZero;

        for(let j = (long.length - 1); j >= 0; j--) {
            let tmp = Number(short[i]) * Number(long[j]) + memory;
            if(tmp > 9) {
                memory = Math.floor(tmp / 10);
            } else {
                memory = 0;
            }

            tmpString = (tmp % 10) + tmpString;
            
        }

        if(memory > 0) {
            tmpString = (memory) + tmpString;
            memory = 0;
        }

        stringsToSum.push(tmpString);
        startZero = "0" + startZero;
    }


    let sumMemory = 0;
    let resultString = "";
    let maxDigits = stringsToSum[stringsToSum.length - 1].length

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    const reversedStringsToSum = stringsToSum.map(reverseString);

    for(m = 0; m < maxDigits; m++) {
        let sum = 0;
        for (let string of reversedStringsToSum) {
            sum += Number(string[m]) || 0;
        }

        sum += sumMemory;

        if(sum > 9) {
            sumMemory = Math.floor(sum / 10);
        } else {
            sumMemory = 0;
        }

        resultString = (sum % 10) + resultString;
    }

    if(sumMemory > 0) {
        resultString = sumMemory + resultString;
    }

    return removeLeadingZeros(resultString);
}

function removeLeadingZeros(str) {
    let i = 0;
    while (i < str.length - 1 && str[i] === '0') {
        i++;
    }
    return str.slice(i);
}

console.log(multiply("2", "3"), "6");
console.log(multiply("30", "69"), "2070");

console.log(multiply("11", "85"), "935");
console.log(multiply("2" ,"0"), "0");
console.log(multiply("0", "30"), "0");
console.log(multiply("0000001", "3"), "3");

console.log(multiply("1009", "03"), "3027");
console.log(multiply("98765", "56894"), "5619135910");

console.log(multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
console.log(multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840560024489175424316205566214109298");
console.log(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");
