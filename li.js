var daysEL = document.getElementById('days')
var hoursEL = document.getElementById('hours')
var minutesEL = document.getElementById('minutes')
var secondsEL = document.getElementById('seconds')

function countdownTimer() {
    const countDownDate = new Date('03/05/2024').getTime()

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

const interval = setInterval(() => {
    const now = new Date().getTime()
    const distance = countDownDate- now

    daysEL.innerText = formatNumber(Math.floor(distance / day)) 
    hoursEL.innerText = formatNumber(Math.floor((distance % day) / hour)) 
    minutesEL.innerText = formatNumber(Math.floor((distance % hour) / minute))
    secondsEL.innerText = formatNumber(Math.floor((distance % minute) / second))

    if (distance < 0) {
        document.getElementById('headline').innerText = 'THANKS FOR WAITING'
        document.getElementById('countdown').style.display = 'none'
        clearInterval(interval)
    }
}, 1000);
    
}

function formatNumber(number) {
   if (number < 10){
    return '0' + number
}

return number
}

countdownTimer()