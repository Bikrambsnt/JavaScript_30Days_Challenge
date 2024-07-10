 const vegetables =["Pumpkin","Tomato" ,"Squash","Potato","Onion"];
 const fruits =["Apple","Mango","Guava","Grapes"];

 //Now to combne tis two array lets try to do with push method

// vegetables.push(fruits);
//  console.log(vegetables);
 //While doing this it will create a problem that it will store array inside array so its not accepatable.
 //Lets try to access an array element 

//  console.log(vegetables[2][1]);


//Lets try to combine both array with concat

// vegetables.concat(fruits)
// console.log(vegetables);//This will also create the same problem of array inside an array
//  //To overcome this problem we will store the both array value in another variable 

 const combineAll  = vegetables.concat(fruits);
 console.log("Combine", combineAll);
 

 //Instead of this also we can use Spread operator which is really easy
 //Spread use (... ) to spread the element

   const usingSpread =[...vegetables,...fruits];//Now it will spread all the array elemet and store in usingSpread variable

   console.log("Spread",usingSpread);

   //Flat method in array helps to combine lots of array in a single form
   //Example

   const messArray =[1,4,6,[4,2,5],6,3,9,[4,3,2,[5,2,9,5]]];//Here we have array inside array inside array now to simplify that we use flat method()
   const fixArray=messArray.flat(3)//inside this parenthness pass the number of depth of an array which should be concat in this array i have 3 dept leaving one main array so i will pass 3
   //and if we dont know the dept of an array we can use infinte also
//    const fixArray2 = messArray.flat(Infinity);
console.log(fixArray);

//The array has the main method which is "is Array". "of Array" and "From array"
//It is used for converting string,object,etc to array

console.log(Array.isArray("Bikram"));//basically "is array" used to check either the value is array or not ,It will give ans in bollean either its array or not,
console.log(Array.isArray([3,"Bikram",6,4]));//

//From array
//It is used to convert strings objects to array

const check ="Bikram";
console.log(Array.from(check));

anotherCheck=332552456,"Bikram";
console.log(Array.from(anotherCheck));//Here it will give an empty array because we have to tell it which one should convert in array.


//of array
const name1 ='Bikram';
const score =100;
const name2 ='hello';
console.log(Array.of(name1,score,name2));
//Thats all about array......... 
//More about on array will be on further files/\.......

 //HAPPY CODING....
