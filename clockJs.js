// 宣告digital  hur、min、sec 等變數
let hur = document.getElementById('hur')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
// 宣告 date、dayOfWeek  
let date = document.getElementById('date')
setInterval(() => {
// 宣告現在時間
let currentTime = new Date()
// 查看各值
console.log(currentTime)
console.log(currentTime.getHours())
console.log(currentTime.getMinutes())
console.log(currentTime.getSeconds())

// 這樣顯示的數字不會呈現 00 ，要新增判斷式
// hur.textContent = currentTime.getHours()
// min.textContent = currentTime.getMinutes()
// sec.textContent = currentTime.getSeconds()   

hur.textContent = (currentTime.getHours()<10?'0':'') + (currentTime.getHours())
min.textContent = (currentTime.getMinutes()<10?'0':'') + (currentTime.getMinutes())
sec.textContent = (currentTime.getSeconds()<10?'0':'') + (currentTime.getSeconds())
}, 1000);

// 宣告 clockFace
let hourFace = document.getElementById('hour-face')
let minFace = document.getElementById('min-face')
let secFace = document.getElementById('sec-face')

let h,m,s;
function setTime(){
    let date = new Date()
    h=date.getHours()
    m=date.getMinutes()
    s=date.getSeconds()
}

function setHands(){
    if(h>12){
        h = h-12
    }
    let hRotation = h*30 + m*0.5
    let mRotation = 6*m
    let sRotation = 6*s

    hourFace.style.transform = `rotate(${hRotation}deg)`
    minFace.style.transform = `rotate(${mRotation}deg)`
    secFace.style.transform = `rotate(${sRotation}deg)`
}
setInterval(()=>{
    setTime()
    setHands()
},1000)