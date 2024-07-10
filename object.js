//Singleton

//Object literal

//Syntax for object 
const myObj ={}//This is non singleton object..
//OR
const myAnotherobj =new Object ()//This is a singleton object //object2 file is all about singleton obj 


//in object we can have string,number,bollean,array or an object itself.
//Object has two main component that is key and values 
//but boject treat both a string..
//Example
//Am declaring below as name but actulally its taking that as "name"...

const sym ="I am a Symbol";//Object has symbol method also ..


const user ={
    //we can give key also instead of name as 0,1 as wish like 
    //0:"Bikram", OR
    name:"Bikram",
    age :22,
    [sym]:"Symbol", //its a symbol so wrap on a [] bracket
    "Hobies":"Video games",
    email:"Bikram@gmal.com",
    Got_a_job:false,
    social:["facebook","Instagram","youtube"]


}

//Now to acceess this value mostly all use . to access it
//Like user.name ,But actually its not correct
//Try to use [] square bracket like //user["name"]// use "" because object treat keys also as a string//
console.log(user.name);//Its also true but not really
//in . we cannot able to access if key is a string example i have "hobbies " as string in above object
//so now i cannot acccess it through . its impossible..


//console.log(user."Hobies");//Its not possible
// so we use square bracket
console.log(user["Hobies"]);
console.log(user["email"]);
console.log(user['social']);

//To access a symbol we use [] without ""
//if we use "" then it will be string

// console.log(typeof user["sym"]);//string
console.log(user[sym]);

//Now overriding value on object
user.name="My new name";
console.log(user)
//we can freeze the change in object also 

// Object.freeze(user);
// user.name="My name is Bikram";
// console.log(user)


//Function in object

user.sayHello = function(){
    console.log("Hello User");
}

user.sayHelloAgain = function(){
    console.log(`Hello User ,${this.name}`);//to access the specific value of an object 
    //"This" its a method in js which is use totake the refrence of current context like in user we have a name key which is the current context of an user object..
    
}

console.log(user.sayHello());
console.log(user.sayHelloAgain())//

//remember . is always use or commonly use for object to access he object value....

