//For each loop is the most common loop used in array...


   //syntax 
   //foreach (function name () {})
   //but for each loop expect call back function which means function without its name ..
   //example function () {} or arrow function () => {}



//example
   const myArr= ["apple" ,"Banana" ,"Guava" , "Grapes"];

   myArr.forEach(function (arr) { //inside this parenthness  i will pass another variable to hold the array value
    //Here i will tell what to do

    console.log(arr);
   })

//Now here this forEach doesnt hold its value only it will hold its key,value , and a whole array

// example

const array1 = ["Apple" ,"Banana" ,"Guava" ,"Oragne"]

array1.forEach( (value ,key ,aray) => {
x
    console.log(value,key,aray);//This is how we can get that...

})

//I can get the value from outer function also like


const newArr =[2,4,3,5,6,3,2]

function print (value) {
    console.log(value);

}
newArr.forEach(print); //Easy ..

   //Lets try with array insde object

   //[{},{},{}]

   const myObj =[{
    name:'Ram',
    age:10,
    address:"Gangtok"
   },
   {
    name:"Shyam",
    age:20,
    address:"Sikkim"
   },
   {
    name:"Bikram",
    age:30,
    address:"Siliguri"
   }

]
myObj.forEach( (value) => {
    // console.log(value);//now if I do this this will give me whole object but I want only a specific value then I'II do
    console.log(value.name); //This s how I can get a specific value of a object..
    console.log(value.age);
});


//Thats it about for each 

//Happy coding....