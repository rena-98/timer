const btnMinutes = document.querySelectorAll(".btn-minute");
const countdownEl = document.querySelector("#countdown");
const btnPlay = document.querySelector(".btn-play");
const btnSeconds = document.querySelectorAll(".btn-second");
let startingMinutes = 3;
let time = startingMinutes * 60;
let interval = null;
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  countdownEl.innerHTML = `${converter(minutes)}:${converter(seconds)}`;
  time--;
}
function converter(num){
if(num<=9){
    return `0${num}`;
}
return num;
}
btnPlay.addEventListener("click", () => {
    if(interval == null){
        interval = setInterval(updateCountdown, 1000);
        btnPlay.style.backgroundColor = "red";
        document.querySelector(".fa-pause").style.display = "block";
        document.querySelector(".fa-play").style.display = "none";
    }
    else {
        clearInterval(interval);
        interval=null;
        btnPlay.style.backgroundColor = "#2fff7f";
        document.querySelector(".fa-pause").style.display = "none";
        document.querySelector(".fa-play").style.display = "block";
        }
 
});
btnMinutes.forEach((btnMinute) => {
  btnMinute.addEventListener("click", () => {

    startingMinutes = btnMinute.getAttribute("data-minute");
    countdownEl.innerHTML = `${converter(startingMinutes)}:00`;
    time = Number.parseInt(startingMinutes) * 60;
  });
});
btnSeconds.forEach((btnSecond) =>{
    btnSecond.addEventListener("click", ()=>{
        let addedSeconds = btnSecond.getAttribute("data-second");
        time = time + Number.parseInt(addedSeconds);


    });

})

