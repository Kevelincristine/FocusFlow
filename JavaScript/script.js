let timer = document.querySelector("#timer")
let start  = document.querySelector("#start")
let pause = document.querySelector("#pause")
let reset = document.querySelector("#reset")
let totalSeconds = 25 * 60
let interval = null
function updateTimer(){
    const minutes = Math.floor( totalSeconds / 60)
    const seconds = totalSeconds % 60
    document.getElementById("timer").innerHTML =
    `${String(minutes).padStart(2, "0")}:{$String(seconds).padStart(2, "0")}`
}
function startTimer(){
    if (interval) return 
}