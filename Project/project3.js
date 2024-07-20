const clock =document.getElementById('time');

function showTime (){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
clock.innerHTML =date.toLocaleTimeString();
}
setInterval (showTime,1000)
    showTime();
