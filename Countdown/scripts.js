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
const time = $$(".deadline-format h4");
const deadline = $(".deadline");


//Change the GA date
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();



let futureDate = new Date(tempYear, tempMonth, tempDay + 12, 24, 12, 0);

let weekDays = weekdays[futureDate.getDay()];
const year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
const day = futureDate.getDate();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

giveaway.textContent = `GiveAway on ${weekDays}, ${day} ${month} ${year} ${hour}:${minute}pm `


//Get Remaining Time 
const futureTime = futureDate.getTime();
function getRemainingTime() {
    const timeLeft = futureTime - new Date().getTime();
    
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;
    const oneSec = 1000;

    const day = Math.floor(timeLeft / oneDay);
    const hour = Math.floor((timeLeft % oneDay) / oneHour);
    const min = Math.floor((timeLeft % oneHour) / oneMin);
    const sec = Math.floor((timeLeft % oneMin) / oneSec);

    function formatTime(time) {
        if(time < 10 ) {
            return `0${time}`;
        }
        else {
            return time;
        }
    }

    const values = [day, hour, min, sec];
    time.forEach((item, index) => {
        item.innerHTML = formatTime(values[index]);
    })

    if(timeLeft < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, the giveaway has ended. You can join other ones in the near future. Many thanks!</h4>`
    }
}

//Countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

//TH expired | format cho số < 10 | setInterval và ClearInterval | Không hardcode cho ngày GA