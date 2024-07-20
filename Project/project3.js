const clock =document.getElementById('time');

function showTime (){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
clock.innerHTML =date.toLocaleTimeString();
}
setInterval (showTime,1000) //This is a function which execute code at every time ... it takes 2 call back and a delay time..

    showTime();
