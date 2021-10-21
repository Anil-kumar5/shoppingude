window.onload = function(){
   sliderOn();
   sliderTw();
}

let sliderOne = document.getElementById('range-1');
let sliderTwo = document.getElementById('range-2');
let displayValOne = document.getElementById('range3');
let displayValTwo = document.getElementById('range4');
let minGap=50000;
let sliderTrack = document.querySelector('.slider-track');
let sliderMaxValue = document.getElementById('range-1').max;
function sliderOn(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function sliderTw(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap
    }
    displayValTwo.textContent = sliderTwo.value
    fillColor();
}

function fillColor(){
    percent1 = (sliderOne.value/sliderMaxValue)*100;
    percent2 = (sliderTwo.value/sliderMaxValue)*100;
    

    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%,#3264fe ${percent1}%,
        #3264fe ${percent2}% , #dadae5 ${percent2}%)`;
      
}