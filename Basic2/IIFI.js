//Immediately invoke function expression...
//Iffi is used to immeiately invoke any function and to manage global pollute inside function...
//Normal function

function sayHello(){
    console.log("Hello");

}
sayHello();
//Now lets covert this into IIFE
//Syntax (function(){})(); //Function should be wrapped inside parentheses 

(function sayHelloMe(){  //This is also called as Named IIFE
    console.log("Hello Bikram");
})();//This semicolon should be added to stop the IIFE.. and  to write another IIFE..
//Now this function will be invoke immediately and cannot be affected by global pollutin..

//Now lets try with arrow function
//Syntax (() =>)();

(() => { //This is called Unnamed IIFE....
    console.log(`Hello`);
})();

//Now how can i pass argument and parenthesses insde IIFE arrow fumction...

((name) => { //Passing parentheses
    console.log(`Hello ${name}`);
})("Bikram");//Passing argument..

//Thats Simple and Easyy...

//Happy Coding.......
