const hour = document.querySelector(".hr");
const minute =document.querySelector(".min");
const second =document.querySelector(".sec");
const display = document.querySelector(".display");

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const dayOfweek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

setInterval(clock);

function clock(){
    const date = new Date;

    const secAngle = date.getSeconds()*6;
    const minAngle = date.getMinutes()*6;
    const hrAngle = date.getHours()%12*30 + minAngle/12;

    const monthName = month[date.getMonth()]
    const dayName = dayOfweek[date.getDay()]

    second.style.transform = `rotate(${secAngle}deg)`
    minute.style.transform = `rotate(${minAngle}deg)`
    hour.style.transform = `rotate(${hrAngle}deg)`
    display.innerText = date.getDate()+" "+monthName +","+dayName;
    
    console.log(monthName, dayName);

}