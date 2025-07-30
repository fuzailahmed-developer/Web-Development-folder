var bulbImg = document.getElementById("bulb-img");
var bulbBtn = document.getElementById("bulb-btn");

function bulbOnOff () {
    if (bulbBtn.innerHTML == "ON BULB") {
        bulbImg.src = "https://img.freepik.com/premium-vector/incandescent-light-bulb-black-background-glowing-lightbulb-realistic-vector-illustration_261737-778.jpg"
        bulbBtn.innerHTML = "OFF BULB"
    }
    else {
        bulbImg.src = "https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs="
        bulbBtn.innerHTML = "ON BULB"
    }
}