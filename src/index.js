module.exports = function toReadable(number) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const dozens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
  
    if (number < 20) {
        return numbers[number];
    } else if (number < 100 && number % 10 === 0) {
        return dozens[+number.toString()[0]];
    } else if (number < 100) {
        return `${dozens[+number.toString()[0]]} ${numbers[+number.toString()[1]]}`;
    } else if (number % 100 === 0) {
        return `${hundreds[+number.toString()[0]]}`;
    } else if (number > 100 && number % 10 === 0) {
        return `${hundreds[+number.toString()[0]]} ${dozens[+number.toString()[1]]}`;
    } else if (number > 100 && +number.toString()[1] === 1) {
        return `${hundreds[+number.toString()[0]]} ${numbers[+number.toString().slice(1)]}`;
    } else if (number > 100 && +number.toString()[1] === 0) {
        return`${hundreds[+number.toString()[0]]} ${numbers[+number.toString()[2]]}`;
    } else {
        return `${hundreds[+number.toString()[0]]} ${dozens[+number.toString()[1]]} ${numbers[+number.toString()[2]]}`;
    }
  }
