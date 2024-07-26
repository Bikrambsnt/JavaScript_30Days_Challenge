 //So JavaScript works on synchronous code by default , so to make it Asynchronous we need to use somr methods
 //Like setTimeout() ,setInterval etc....

 //Example as below...


 //setTimeout : This will execute the code at a given time for a single time .

//Syntax 
//    setTimeout( {Refrence or handler },time ).it always take the time in milli second (ms)

 
 const setTime =setTimeout( function () { //setTimeout need a call back function or a handler both are samr to perfoerm its job..

    console.log('Bikram')//It will print Bikram after 2 second for one time only...

 },2000);//This 2000 is the time for delay or to hold the code at a register call stack for 2 second.

//Now we can stop this set timout also by passing its refrence to the method that is clearTimeout
//Example..

clearTimeout(setTime); //Now this will clear the timeout and that Bikram will never going to print..


//Now lets try to change the h1 using timeout and stop before it perform its job...


//This is how we can Change the text of a h1 at a given time...

const changeH1 = function(){
    document.querySelector("#h1").innerHTML="Text Changed";
    console.log('H1 Text has been changed');
}

 const stop =setTimeout(changeH1 ,2000); //here I have provide the refrence of the function..

//Now lets clear the timeout before it execute using the stop button..


const button = document.querySelector('#button');

button.addEventListener('click' , () =>{
    clearTimeout(stop); //So this clearTimeout will always take the refrence of setTimeout.
    console.log("Button clicked! Timeout has been Stopped.");
});

//Easy...

//Lets try another Example...

const div = document.querySelector('body');
   
  function change (){
    div.style.backgroundColor ="orange";
    console.log("Backgroung has been changed");
  }

 const remove = setTimeout (change,3000);
 
 const btn = document.querySelector('#btn');

 btn.addEventListener('click' , function (){
    clearTimeout(remove); //take setTimeout refrence .
    console.log("Backgound change stopped");
 })

 //Easy.. Thats it about SetTimeout... More to go on next file...

 //Happy Coding..



