const user = {
    username: "Bikram",
    age : 22,

    welcomeMsg: function (){
        console.log(this.username +" Welcome to Js");
        console.log(this);
    }

}
// user.welcomeMsg();
// user.username ="Ram";
// user.welcomeMsg();
// console.log(this);

// function hello(){
//     let usename ="Bikram"
//     console.log(this.usename);
// }
// hello();
// //It will give undefined because we cannot use this in function its only used in object.

const hello =function(){
    let usename ="Bikram"
    console.log(this.usename);
}
hello();

//Creating arrow function
// Syntax 
// () => {}  //() refers to parentheses. // => refers to arrow

let hi = () => {
    let age =22;
    console.log(this.age);
}
hi();

//Example

const addNum = (num1 ,num2) => {
   return num1 +num2;
}
console.log(addNum(3,5));


//Implesit return in function
//in this we dont use return and doesnt use curly braces/ Parentheses and  we will wrap args on parenthessness
// example
   const helloHI = (num1,num2) => (num1+num2)
   console.log(helloHI(10,20));

   //In implesit return we dont use retyen and in explicit retyrn we use return.

   //Object return
   const obj = () => ({username:"Bikram"})//Its important to wrapp object inside parenthess to access it in arrow function..
   console.log(obj());

   //Thats it for arrow function...

   //More on later on files..

   //Happy Coding..