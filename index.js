const colors = require("colors/safe");
const [firstValue, secondValue] = process.argv.slice(2);
let arrOfPrime = [];
let even = (el)=> parseFloat(el) == Number;

if (!Number(firstValue)||!Number(secondValue)) {
    console.log(colors.red('Вы не ввели число'))
    process.exit(1);
}
selectionNumber:
    for (let i = firstValue; i <= secondValue; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue selectionNumber
            }
        }
        arrOfPrime.push(+i)
    }

if (+firstValue > +secondValue) {
    console.log(colors.red('Первое число не может быть больше торого'))
} else if (!arrOfPrime.length) {
    console.log(colors.red('Простых чисел нет'))
} else {
    for (let i = 0; i < arrOfPrime.length; i++) {
        if (3 * i < arrOfPrime.length)
            console.log(colors.green(arrOfPrime[3 * i]))
        if (1 + 3 * i < arrOfPrime.length)
            console.log(colors.yellow(arrOfPrime[1 + 3 * i]))
        if (2 + 3 * i < arrOfPrime.length)
            console.log(colors.red(arrOfPrime[2 + 3 * i]))
    }
}

