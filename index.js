let hrhand=document.getElementById("hour");
let minhand=document.getElementById("minute");
let sechand=document.getElementById("second");

setInterval(() => {
    let getTime=new Date();
    console.log(getTime);
    let getHour=getTime.getHours();
    let getMinute=getTime.getMinutes();
    let getSecond=getTime.getSeconds();

    hrhand.style.transform=`rotate(${30*getHour+getMinute/2}deg)`;
    minhand.style.transform=`rotate(${6*getMinute}deg)`;
    sechand.style.transform=`rotate(${6*getSecond}deg)`;
}, 1000);