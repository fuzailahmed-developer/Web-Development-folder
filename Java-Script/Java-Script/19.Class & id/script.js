var h1El = document.getElementById("h1");
var bulbEl = document.getElementById("bulb");
var btnEl = document.getElementById("btn");
var isOpen = false;

function handleBulbOnOff() {
    if (isOpen) {
        isOpen = false;
        h1El.innerHTML = "BULB OFF"
        bulbEl.src = "pic_bulboff.gif"
        btnEl.innerHTML = "ON BULB"
    } else {
        isOpen = true;
        h1El.innerHTML = "BULB ON"
        bulbEl.src = "pic_bulbon.gif"
        btnEl.innerHTML = "OFF BULB"
    }
}

function handleStyle() {
    // update class 
    h1El.className = "head"
    
}