const colors = require("colors/safe");
let [firstValue, secondValue] = process.argv.slice(2);
let arrOfPrime = [];

console.log(colors.red('Задание по первому уроку'))
if (firstValue == 1 || firstValue == 0) {
    firstValue = 2
}
if (secondValue == undefined || secondValue < 2 || firstValue == undefined || firstValue < 1) {// Если числа ниже 2, закрыть программу
    console.log(colors.red('Числа меньше 2 не являются простыми'))
    process.exit(1);
}

if (!Number(firstValue) || !Number(secondValue)) {
    console.log(colors.red('Вы не ввели число'))
    process.exit(1);
}

function selectionNumber(a, b) {
    for (let i = a; i <= b; i++) {
        let flag = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = false
            }
        }
        if (flag) {
            arrOfPrime.push(+i)
            if (arrOfPrime[0] == 1) {
                arrOfPrime.splice(0, 1)
            }
        }
    }
}

selectionNumber(+firstValue, +secondValue)

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
