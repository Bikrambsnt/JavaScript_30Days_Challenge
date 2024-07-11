//Scope //
//Basically this concept has been born when javaScript got some problem in variable declaraton method..

//Example
let a=10;
const b=20;
var c=30;//Here the main probelm has arised in var..

{}
//This is called scope 
//The outer window from {} this is called global scope..

//Example..
if(true){
    let x=100;
    const y =200;
    var z=300;
}
//Now here as per the rule the scope should not be come outside from its scope block
//And thats what happen here when i print x,y,and z ,x and y refuse to print but z gets print outside the scope block due to var,which is really going to create a problem in scope declaration..

console.log(x);//Failed to print
console.log(y);//Failed to print
console.log(z);//But this one gets print which is not good nah nah never..

//Thats the reason why let and const were instroduce...

//Another example..
if (true){
    let i =10;
    const j=20;
    var k=30;

    console.log(i);
    console.log(j);
    console.log(k);//Avoid using this var...
}

//This should work only on inside of the scope.....

//More on next file....

//Thing is that from global scope we can accss global declare value but from scope value should not be leaked..

