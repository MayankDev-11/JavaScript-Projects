let daysE1 = document.getElementById("days")
let hoursE1 = document.getElementById("hours")
let minsE1 = document.getElementById("mins")
let secondsE1 = document.getElementById("seconds")

const newYears = "1 January 2021";

function countDown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalseconds =(newYearsDate - currentDate) / 1000

    const days = Math.floor(totalseconds / 3600 / 24)
    const hours = Math.floor(totalseconds/ 3600) % 24;
    const mins = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;

    daysE1.innerHTML = formatTime(days)
    hoursE1.innerHTML = formatTime(hours)
    minsE1.innerHTML = formatTime(mins)
    secondsE1.innerHTML = formatTime(seconds)
}

function formatTime(time){
    return time< 10 ? (`0${time}`) : time;
}

setInterval(countDown,1000)