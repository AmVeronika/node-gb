const colors = require("colors/safe")
const [eventDateUser] = process.argv.slice(2);// Дата события, которое вводит пользователь в формате (см. Readme.md)
let moment = require('moment') // Текущая дата и время
let date = moment().format()
let momentYear = date.substring(0, 4)// Текущий год
let momentMonth = date.substring(5, 7)// Текущий месяц
let momentDay = date.substring(8, 10)// Текущий день
let momentHour = date.substring(11, 13)// Текущий час
let momentMin = date.substring(14, 16)// Текущая минута
let momentSec = date.substring(17, 19)// Текущая секунда

let todayDate = `${momentYear}-${momentMonth}-${momentDay}`// Формат даты

console.log(colors.red('Второе задание по второму уроку'))

let eventDate = eventDateUser.split('/')[0]
let eventTime = eventDateUser.split('/')[1]
let eventHour = eventTime.split(':')[0]// Час события
let eventMin = eventTime.split(':')[1]// Минута события
let eventSec = eventTime.split(':')[2]// Секунда события

let dateFormatEvent = moment(eventDate)
let dateFormatToday = moment(todayDate)

let quantityOfSec = dateFormatEvent.diff(dateFormatToday) / 1000// Кол-во секунд до начала мероприятия (перерасчёт дней)
let timeEvent = (+eventHour * 3600) + (+eventMin * 60) + (+eventSec)
let timeToday = (+momentHour * 3600) + (+momentMin * 60) + (+momentSec)
let time = timeEvent - timeToday + quantityOfSec;// Общее кол-во секунд до начала мероприятия (со временем и днями)

let day;
let hour;
let min;
let sec;
let set = setTimeout(setTime,
    1000);

function setTime() {
    time--;
    day = Math.floor(time / 3600 / 24);
    hour = Math.floor(time / 3600) % 24;
    min = Math.floor((time - hour * 3600) / 60) % 24;
    sec = time % 60;

    if (time > 0) {
        set = setTimeout(setTime,
            1000);
    } else {
        clearTimeout(set);
        console.log('Время вышло')
        process.exit(1);
    }
    console.log(`До начала мероприятия осталось: ${day} дней/дня ${hour} часов  ${min} минут ${sec} секунд`);
}
