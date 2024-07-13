

//How Reduce Method work On js

// Basically reduce have 3 main thing that is initial value , accumulator and a current value...


// Initial value refer to the starting value or the define value

// accumulator is a storage variable where, at first initial value will be kept

// current value is the array value

// example

// const arr [2,4,5,6,3,2,4] //This is my array value

// initial value =0; //This is the initial or starting declare value 


   //Lets try with an example

   const arr =[1,2,3,4,5,6,7,8,9]

   const myArr = arr.reduce (function (accumulator ,currentVal) { //As above i said it has accumulator and a current value..
    //Now if I want to see whats going on accumulator and current value then i can see it 

    console.log(`The Accumulstor have: ${accumulator} and the current Value have ${currentVal}`)

       return accumulator+currentVal; //Am returning the sum of 2 

//But till here accumulator does't know aht to take the initial value so we will assign that value after the function scope
   } ,0)//Here i have assign the initial value
   console.log(myArr);


//same concept using array function without return 

const newArr =[2,3,2,5,3,6,8,3]

const total =newArr.reduce((acc ,curval) =>acc+curval,3 ) //3 ,assigning initial value

console.log(total);

//Easy right....


//Lets take example of object and array

const buyCourses =[
    {
        courseName: "JavaScript",
        price:2999
    },
    {
        courseName: "Java",
        price:5999
    },
    {
        courseName: "Python",
        price:3999
    },
    {
        courseName: "Html and Css",
        price:200
    },

];

//Now suppose I want to add the total price of the course..

const totalPrice =buyCourses.reduce((acc , courses) =>acc+ courses.price ,0 );

console.log(totalPrice);

//Easy Right...

//So Till here I have completed all the basic topic of js array,obj,function ,loop etc..


//More to Go..

//Happy Coding....