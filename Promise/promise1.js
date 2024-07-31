//Promise it is like a async but in promise refers to the object that the task which is given to it will not going to execute as soon as it goes into task queue it will complete 
//that task after some time or it will get fail to complete that task...(eventual completion or failure.)
//Like file access , db request , encripton or description//


//promises has 3 state..

// Pending
// fulfill
// rejected promise work on this three state or stage....

//Promise has two step 
// 1. To craete promise
// 2.To consume that craeted promise

//promise will be created and after creation it needs to be consumed..//discussed below...

//Creating of promises//
// syntax 
// new Promise()//Need to use new keyword to create a promise because its a object.

//now remember that promise take call back function of resolve or reject means either task is completed or it gets failed




const promiseOne = new Promise( function(resolve ,reject){ //Takes call back function
  //things that promise can do
  //do async call
  //db call , encription , file read , network etc.

  setTimeout(function(){
    console.log('Async Task Has been Completed')
    //call resolve to return the value into .then()
    resolve();
  },1000);

}); 
 //Now promise has been created successfully now we need to consume this promise also //

 //Consuming of promise hass benn done by .then() keyword , this .then() keyword will directly poins to the resolve callback of the promise


  //and that .then()  will also take the call back function//and this function will automatically gets the arguments which will returned from the above promise after completing that task
 //example
 promiseOne.then(function(){ //it will get the argumet  returned by the created promise

    console.log('Consumption of Promise has been Completed')

    //now this will never goin to execyte because we have to call the resolve on the created promise 
    //to return the value to .then()
    //after that it will also get executed...

 })



 //now that above one gets complex right so we can do that simply like

 new Promise(function(resolve ,reject){ // promise doesnt need to hold on a variable we can directly create it

    setTimeout(()=>{ //i have used arrow function here you whichever feels you better
        console.log('Simple Promise created');
        resolve()//need to call this because we have to return this value after completing the task here to .then() to consume this promise

    },1000)
   
    }).then(function(){ //I can directly consume it here
            console.log('Consumed simple Promise');
        })
   

   //This seems simple right..
   //Thats all basic here
   //More on next file
   //Happy coding
 






