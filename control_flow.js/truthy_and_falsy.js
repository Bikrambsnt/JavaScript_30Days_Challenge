//This is kind of similar to true and false but trthy and false based on assumption or like a prediction (may be)

const example ="hello";

if(example){
    console.log("Hi");
}

//This is the true condition...

//trythy will be 


// const example2 ="";
const example2 =[];
if(example2){
    console.log("This is a output");
}
else{
    console.log("Output failed");//This is a output because example2 has a empty string which s flase..


}
//Now if I pass empty array then it will be true..

//Some truty and falsy values are as follows/

//Falsy
 //false , 0 ,-0 ,BigInt , null ,NaN ,undefined..
 
//  Truty

// true , " " , [] , "false" , "0" ,{} , function (){}

const example3 =[];

if(example3.length ===0){ //here i am checking weather the array is empty or not and its true..
    console.log("Its an empty Array");
}

//Lets do with object also...

const emptyObj ={};

if(Object.keys(emptyObj).length ===0){ //Okay so here why I did Object.keys(emptyObj) because now it will give object into an array so i can check array length .. same as above
    console.log("Its an Empty Object");
}

//Easy Right.....


////MAIN AND IMPORTANT//
      
     //Nullish coaleshing operator ( ?? )// Null and Undefined

     //Basically this oprtaor works only on null and ndefined value and it will used to handle that value..
     //If you got null value then ?? this operator will lokk for any other value that match if not then it will assign null,,,

     //Example

   let num1; //am assigning null to num1

   num1 = 5 ?? 10;
   console.log(num1);//Now it will give me 5 bcz that the first value it has

   num1 = null ?? 10;
   console.log(num1); //Now it will look for any other value that match instead of null if it has then it will assign that like in this case it will assign 10

   num1 = undefined ?? null;

console.log(num1); //It here it will assign null bcz after undefined it looks for any other matching value so it assign null

num1 =null ?? 10 ?? 15;
console.log(num1); //Here it will assign 15 because the next value is 15..

num1 =null ?? undefined ?? 10;
console.log(num1) //here it wll assign 10 because the value that match is 10...


///Ternary oprator (?)..

//It act as same as if statement but directly 

// syntax

//    condition ? true : false

const myAge =20;

myAge >=18 ? console.log("You can vote now") : console.log("you cannot vote");

//Easy..
//Thats it For control flow more on other files...

//Happy coding....