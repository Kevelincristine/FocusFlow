let isBreak = false;
let time = 25 *60 ;
let timer;
const display = document.querySelector("#timer");
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const pauseBtn = document.querySelector("#pause")

const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#addTask");
const list = document.querySelector("#todo-list")

function updateTimer(){
    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    display.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;


}
 startBtn.addEventListener("click",() => {
    if (timer) return;
    timer = setInterval (() => {
        if (time > 0 ) {
            time--;
            updateTimer();
        } else {
            clearInterval(timer);
            timer = null;
            if (!isBreak) {
                isBreak = true;
                time = 5 * 60;
                updateTimer();
                startBtn.click();
            }
            else {
                isBreak = false;
                time = 25 * 60;
                updateTimer();
                alert("Pomodoro Finished!")
            }
        }
    } , 1000 )
 });
 pauseBtn.addEventListener("click", () =>{
    if (!timer) return;
    
    clearInterval(timer);
    timer = null;
 });
 resetBtn.addEventListener("click",()=>{
    clearInterval(timer);
    timer = null;
    isBreak = false;
    time = 25 * 60;
    updateTimer();
 });
 
addBtn.addEventListener("click",
    () => {
        if (input.value === "") return;
    const li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", () =>{
        li.remove();
    });
    list.appendChild(li);
    input.value = "";
    }
)


 