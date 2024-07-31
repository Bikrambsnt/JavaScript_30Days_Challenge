//Promose 2
//passing value from resolve to consume means passing value from created promise into consumed promise through resolve
//example..


new Promise(function(resolve ,reject){
    setTimeout( function(){

        resolve({                    //passing value from this resolve to .then() or into consume... //mostly it will pass object

            username: "Bikram",
            age:22,
            email:'Bikramexample@gmail.com'
        })

    } ,1000)

    }).then(function (user){
        //Now here How can i take that resolve value .then() has been connected with resolve but now how can I take that value so lets take it
        //and remember .then() will  always directly get connected with resolve.
        //taking resolve returned value fo that I will pass a parameter to take that value 
       console.log(user); //output { username: 'Bikram', age: 22, email: 'Bikramexample@gmail.com' }

// Thats how we take take the value pass by resolve
})


//Reject and chaining of value...



const promiseTwo = new Promise (function (resolve,reject){
    setTimeout(() =>{
        let error =true; //if error will be there then it will give the error message using reject
        if(!error){
            resolve({
                name:'Bikram',
                email:'example@gmail.com',
                pass:'12345'
            })
        }
        else{
            reject('ERROR: Something went Wrong! Please try again');//if error occur then it will give the error
        }

    },1000)
});

//now  accessing or getting that resolve value 

 promiseTwo
 .then((user)=>{ //user will take the value return bu resolve to .then()
     console.log(user);//this will give me whole object.
     
     //now if I want to take only one value from object then I cannot do this
    //  console.log(user.name);
     //So like this I cannot get the value it will give me bunch of error instead

     //so we will need to again return that value to get the specific value

     return user.name; //now I can get this value by chaining it more

 })
 .then((name)=>{
    //now I can get the specific value

    console.log(name);

 })
 .catch(function(error) { //catch is used to get the error return by the reject.
    console.log(error);
 })

 //Now I can get the specific value also and returned error also
 //If I do error = false then I will the returned value also that is Bikram
.finally(()=> console.log('The promise is Either Resolve or get Rejected')) 
//finally is the default option which will always get run with its final result

//Thats it for chaining the value...
///Easy right
//More on next file
//Happy coding
