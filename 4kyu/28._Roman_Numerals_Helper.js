/*
Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
2008 is written as 2000=MM, 8=VIII; or MMVIII
1666 uses each Roman symbol in descending order: MDCLXVI.
Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Help
+--------+-------+
| Symbol | Value |
+--------+-------+
|    M   |  1000 |
|   CM   |   900 |
|    D   |   500 |
|   CD   |   400 |
|    C   |   100 |
|   XC   |    90 |
|    L   |    50 |
|   XL   |    40 |
|    X   |    10 |
|   IX   |     9 |
|    V   |     5 |
|   IV   |     4 |
|    I   |     1 |
+--------+-------+

*/


class RomanNumerals {
	
	static romanNumerals = [
		{ value: 1000, symbol: 'M' },
		{ value: 900, symbol: 'CM' },
		{ value: 500, symbol: 'D' },
		{ value: 400, symbol: 'CD' },
		{ value: 100, symbol: 'C' },
		{ value: 90, symbol: 'XC' },
		{ value: 50, symbol: 'L' },
		{ value: 40, symbol: 'XL' },
		{ value: 10, symbol: 'X' },
		{ value: 9, symbol: 'IX' },
		{ value: 5, symbol: 'V' },
		{ value: 4, symbol: 'IV' },
		{ value: 1, symbol: 'I' },
	];

	static toRoman(num) {
		let result = '';
		for (const obj of RomanNumerals.romanNumerals) {
			while (num >= obj.value) {
				result += obj.symbol;
				num -= obj.value;
			}
		}
		return result;
	}

	static fromRoman(str) {
		let result = 0;
		let i = 0;
		while (i < str.length) {
			const twoChar = str.slice(i, i + 2);
			const oneChar = str[i];

			const validRomanNumeral = RomanNumerals.getNumber(twoChar);
			if (validRomanNumeral) {
				result += validRomanNumeral;
				i += 2;
			} else {
				result += RomanNumerals.getNumber(oneChar);
				i += 1;
			}
		}
		return result;
	}

	static getNumber(symbol) {
		for (const obj of RomanNumerals.romanNumerals) {
			if (obj["symbol"] === symbol) {
				return obj["value"];
			}
		}

		return false;
	}
}

console.log(RomanNumerals.toRoman(1000)); // "M"
console.log(RomanNumerals.fromRoman("M")); // 1000
console.log(RomanNumerals.toRoman(4)); // "IV"
console.log(RomanNumerals.fromRoman("IV")); // 4

console.log(RomanNumerals.toRoman(1000), 'M');
console.log(RomanNumerals.toRoman(4), 'IV');
console.log(RomanNumerals.toRoman(1), 'I');
console.log(RomanNumerals.toRoman(1990), 'MCMXC');
console.log(RomanNumerals.toRoman(2008), 'MMVIII');

console.log(RomanNumerals.fromRoman('XXI'), 21);
console.log(RomanNumerals.fromRoman('I'), 1);
console.log(RomanNumerals.fromRoman('IV'), 4);
console.log(RomanNumerals.fromRoman('MMVIII'), 2008);
console.log(RomanNumerals.fromRoman('MDCLXVI'), 1666);