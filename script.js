const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');

const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countdown(){
    const currentDate = new Date();
    const newYearDate = new Date("1 jan 2023");
    const diffTimeInSecond = (newYearDate - currentDate) / 1000;
    console.log(diffTimeInSecond);
    const days = Math.floor(diffTimeInSecond / 3600 / 24);
    console.log(days);
    const hours = Math.floor(diffTimeInSecond / 3600 ) % 24;
    const minute = Math.floor(diffTimeInSecond / 60) % 60 
    const seconds = Math.floor(diffTimeInSecond  % 60 )
    daysEl.innerHTML = timeFrmat(days);
    hoursEl.innerHTML = timeFrmat(hours);
    minsEl.innerHTML = timeFrmat(minute);
    secondsEl.innerHTML = timeFrmat(seconds);
   
    
}
function timeFrmat(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown,1000)

