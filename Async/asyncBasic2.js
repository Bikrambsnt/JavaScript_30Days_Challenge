//Here i have explained about setInterval method which is  Asynchronous type  in js

//setInterval will execte the code at a given time repeadely for n time till the condition meet 

//syntax

// setInterval({function or handler} , time)

// setInterval also support third parameter after declaring time..

//example

function sayMyName (){
    console.log('Bikram Basnett',Date.now()); //here I am printing the message
}

const stop =setInterval(sayMyName,1000); //Now this will keep executing the fuction in everytime for n time


clearInterval(stop);//To stop the Interval we will use clearInterval and there we will pass the refrence of the setInterval...


//In setInterval we can pass third parameter also.... \
//Example..

function greet (say) {
        console.log(say,Date.now());
}
const clear =setInterval(greet ,1000,'Hello Learner'); //here passing the third parameter after declaring time..

clearInterval(clear);


///Thats the basic of the SetInterval lets see more example....

let time =10;
let getInterval;  //this is to hold the setInterval values

const start =document.querySelector('#btn1');
const  stopIt = document.querySelector('#btn2');

start.addEventListener('click' ,()=>{

   if(!getInterval){ //Checking is getInterval is false if false then only execute if true that ma=eans timer is already running no need to start again..

        getInterval = setInterval (()=>{
            time --;
            console.log(`Remaining time: ${time}`);
        
            if(time<=0){ //when time reach 0 clearInter will get a call and stop timer..
                clearInterval(getInterval);
                console.log("Times Up");
            }
        
        },1000)
       
   }

    

});


stopIt.addEventListener('click' ,function (){ //click stop button to forcely stop the countdown...

    clearInterval(getInterval);
    console.log('Time Stopped! Stop Button has been Pressed');

})


//Thats it //....
//Happy Coding..