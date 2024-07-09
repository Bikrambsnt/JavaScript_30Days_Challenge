//Declare numbers.

let num = new Number(100);

 num.toString().length;
console.log(num.toFixed(5));

const num2 = 20.555;
console.log(num2.toPrecision(3));

const hundrednum =100000000;
console.log(hundrednum.toLocaleString('en-IN'));

//And lots of other option are also there to access it just do Number.

//++++++++++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++//

console.log(Math.PI);
console.log(Math.hypot());
console.log(Math.abs(-5));//Abs which is abbsolute value can help to change the sign from - to plus but not from + to -
console.log(Math.round(2.3))
console.log(Math.ceil(2.2));
console.log(Math.floor(2.9));

console.log(Math.min(2,4,6,8,7))
console.log(Math.max(10,4,3,5,6,8))





 console.log(Math.random() * 10);//random give value from 0 to 1 and we use 10 to shift the point value one bit
//0.7344363565340073 to avoid this type of senerio we add 1 to kick 0 from random value
//so it will be 
console.log(Math.round(Math.random()*10) + 1);
//Math.round(Math.random())
//Now its gurantee that it will gave us from 1 to 10 value kick off 0

//Define min and max value

const min =1;
const max=6;

console.log(Math.floor(Math.random()*(max-min +1 ) +min))//Syntax or formula for defining min and max value
