//Here we will use for in loop...

//For in loop will always give you key value means its key,
//Like if i have a array ["a" ,"b" ,4,6,4] then for in loop will give me this array key 0,1,2,3,4


//Syntax

// for (const key in object) {
  
// }

//Example

const myObj={
    name:"Bikram",
    age:22,
    learning:"Javascript"
}

//Now here i will use for in loop to itrate object...

for(const key in myObj){
    // console.log(key);//Now This will give me the key of the object ...//so to get the value of an object we will do

    // console.log(myObj[key]);//Simple
    // //OR

    console.log(`${key} value is ${myObj[key]}`);
}

//Lets try this with array

const arr=[2,4,6,4,3,2,1,4,5,6];

for (const key2 in arr) {

    console.log(`The key is ${key2} and the value is ${arr[key2]}`);
    
}

//for in loop i cant use map which means it is not possible to do iteration on map

//Thats it for for in loop

//Happy Coding...

