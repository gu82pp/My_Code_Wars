/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
    let newString = ""
    let stringLength = str.length;

    if (stringLength === 0) {
        return '';
    }

    let needCapitalize = false;

    for (let i = 0; i < stringLength; i++) {

        // Skip the first character if it's a dash or underscore
        if(i === 0) {
            if (str[i] === '-' || str[i] === '_') {
                continue;
            }
            // If it's the first character, just add it to the new string
            newString += str[i];
            continue;
        }

        // If the character is dash or underscore, set the needCapitalize flag
        if (str[i] === '-' || str[i] === '_') {
            needCapitalize = true;
            continue;
        }

        if (needCapitalize) {
            newString += str[i].toUpperCase();
            needCapitalize = false;
        } else {
            newString += str[i];
        }

    }

    return newString;
}


console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"
console.log(toCamelCase(''), '')
console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))
console.log(toCamelCase("A-B-C"))