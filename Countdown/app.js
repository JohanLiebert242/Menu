//Local API
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

//Get Elements
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const giveaway = $(".giveaway");
const deadline = $(".deadline");

let tempFutureDate = new Date();
let tempYear = tempFutureDate.getFullYear();
let tempMonth = tempFutureDate.getMonth();
let tempDate = tempFutureDate.getDate();


let futureDate = new Date(tempYear, tempMonth, tempDate, 22, 12, 0);
let futureWeekDay = weekdays[futureDate.getDay()];
let futureYear = futureDate.getFullYear();
let futureMonth = months[futureDate.getMonth()];
let futureDay = futureDate.getDate();
let futureHour = futureDate.getHours();
let futureMinute = futureDate.getMinutes();
let futureSecond = futureDate.getSeconds();

giveaway.textContent = `Giveaway ends on ${futureWeekDay}, ${futureDay} ${futureMonth} ${futureYear} at ${futureHour}:${futureMinute}pm`

    //Get Remaining Time
function getRemainingTime() {
    const today = new Date().getTime();
    const futureMil = futureDate.getTime();
    let timeLeft = futureMil - today;
    const time = $$('.deadline-format h4');

    // 1s = 1000ms
    // 1m = 60s
    // 1h = 60m
    // 1d = 24h
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let dayLeft =  Math.floor(timeLeft / oneDay);
    let hourLeft = Math.floor((timeLeft % oneDay) / oneHour);
    let minuteLeft = Math.floor((timeLeft % oneHour) / oneMinute);
    let secondLeft = Math.floor((timeLeft % oneMinute) / 1000);

    function formatTime(time) {
        if(time < 10) {
            return `0${time}`;
        }
        else {
            return time;
        }
    }

    const values = [dayLeft, hourLeft, minuteLeft, secondLeft];
    time.forEach((timeLeft, index) => {
        timeLeft.innerHTML = formatTime(values[index]);
    })
    if(timeLeft < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4>Sorry the giveaway has ended. You can join other events of us in the near future. Thanks a lot!</h4>`
    }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();