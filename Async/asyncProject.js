//Here I have created a small project to generate the random Backgroung color using setInterval....

//For that first we need to generate the Hex code of the number so...

const generateColor = function (){
      //so the logic is that first i will generate 6 numer of random color and after that I will assign # at front of it easy..
    const hex ='1234567890ABCDETF'; //This is the range of hex value...
    let color ='#';

    for(let i=0; i<6;i++){

      color += hex [Math.round(Math.random() *16)]; //here it will add the generated hex value wth color.
 }
return color; //returning color ..

}
// console.log(generateColor());

//Now apply this color to the background..

const start = document.querySelector('#btn1');
const message = document.querySelector('#message');
const stop = document.querySelector('#btn2');

let refrence; //created this to hold the SetInterval value.. i cannot create it insode because of scope..

start.addEventListener('click' ,function (){

//  document.body.style.backgroundColor =generateColor();  
 //Now it will change the bg color when I click the button , but the thing is that it should change automatically after I click onstart so 
//  for that we will use interval

//Now i will wrap that bd color changing in a ,ethod to use in a setInterval..

   const startChangingColor =function() {

    document.body.style.backgroundColor =generateColor();
    message.innerHTML ="Started Changing Backgroung Color"
    message.style.color ="Black";
    message.style.fontSize ='20px';
    message.style.fontfamily ='Poppins';

   }

   if(!refrence){ //here I am checking if the refrence is false or not running then only start changing color.. because we set in null on stop.
   refrence= setInterval(startChangingColor ,1000); //Now it will start changing the background automatically..
  
   }
})

//Now we need to stop it also so we will use clear Interval...

//so to do this we need to make the refrence to setInterval

stop.addEventListener('click' ,function() {
   clearInterval(refrence);
   message.innerHTML = 'Stopped! changing Color';
   message.style.color ="Black";
   message.style.fontSize ='20px';
   message.style.fontfamily ='Poppins';

  //  console.log(refrence);

   //Now evertything is good but we need to fix one thing that is
   //If i keep clicking the start button then I will overRide the refrence ... so to fix that we need to make it null

   refrence =null; //Now when I click stop it will clear the values or whatever is stored inside the refrence variable
//  console.log(refrence);
});

//Easy right...
// Thats it..

//Happy Coding