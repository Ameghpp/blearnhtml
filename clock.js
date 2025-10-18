let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("secounds");

setInterval(() => {
    let currentTime = new Date();
    console.log(currentTime);
    hours.innerHTML = currentTime.getHours();
    minutes.innerHTML = currentTime.getMinutes();
    seconds.innerHTML = currentTime.getSeconds();
}, 1000);

let currentTime = new Date();
console.log(currentTime);
hours.innerHTML = currentTime.getHours();
minutes.innerHTML = currentTime.getMinutes();
seconds.innerHTML = currentTime.getSeconds();
