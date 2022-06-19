function timer(){
    let time = document.getElementById('timer')
    let futureDate = new Date('2022-06-26 00:00')
    let now = new Date()
    let difference = futureDate.getTime() - now.getTime()
    let days = Math.floor(difference/1000/60/60/24)
    let hours = Math.floor(difference/1000/60/60)%24
    let minutes = Math.floor(difference/1000/60)%60
    let seconds = Math.floor(difference/1000)%60
    let txtDay = document.getElementById('days')
    let txtHour = document.getElementById('hours')
    let txtMinutes = document.getElementById('minutes')
    let txtSeconds = document.getElementById('seconds')
    //time.innerHTML = seconds
    txtDay.innerHTML = correctNumber(days)
    txtHour.innerHTML = correctNumber(hours)
    txtMinutes.innerHTML = correctNumber(minutes)
    txtSeconds.innerHTML = correctNumber(seconds)
}
function correctNumber(number){
     if(number < 10){
        return '0'+number
     }else{
        return number
     }
}
timer()
setInterval(() => {
    timer()
},1000)