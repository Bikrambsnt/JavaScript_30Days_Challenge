//Tis is basically a for of loop 


// syntax
// for (const iterator of object) {

//here iteration refers to variable and the object refers to the value in which loop will run
    
// }

// example

const arr =[4,5,6,8,5,3,2,6,9,5,3,5,8,7,4,5];
//Now here i want to make  a loop then..

for(const myArr of arr){
   console.log(myArr); //Easy in this no need to declare increment or decrement it will do it automatically

}

//for of loop on string also work..

const str ="Hello javaScript"

for (const str2 of str) {
    if(str2 == " "){
        console.log("Space Detected");
        continue;
    }
    console.log(str2);
    
}

//Map 

//Map is basically a object which only return unique value ....

//Syntax 
//const map = new Map()]


const myMap = new Map()

myMap.set('Game1' , 'Pubg'); //Here set value is used to set new value
myMap.set ('Game 2' , 'Clash of Clans');
myMap.set ('Game3' ,'Mine Craft');


console.log(myMap); //Map(3) {
//     'Game1' => 'Pubg',
//     'Game 2' => 'Clash of Clans',
//     'Game3' => 'Mine Craft'
//   }
//Out put will be given on object 

//Implementing loop on map

for (const key of myMap) {
        console.log(key);//Now When I directly print the key value then it will give the output on array form which we dont want..

}
//To Fix this we will [ ] to destructure the array 

for(const [key ,value] of myMap){ ///Here i have used [] to hold both the value and destructure the array
    console.log(key ,value);
}


//Now lets try to use for of loop on object ...

const myObj ={
    name:"Bkram",
    age: 22,
    learning: "javaScript"
}

for (const obj of myObj) {

    console.log(obj)
    
}//No this will not work on object because we cannot use this method to run the loop on object through for of loop
//Neither I can do this

for (const [obj ,value] of myObj) {

    console.log(obj,value)
    
}

///+++++++++++++++++++++++++Thats the Basic of for of loop on array and object+++++++++++++++++++++++++++++++++++++++++++++++++

//On nect file i have shown how to implement loop on object...

//Happy coding...

