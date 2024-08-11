

  //Object contntains some method that  can be use to check other values deeply...

  //Like one best example

   // in Math.PI its value is always 3.14.... so can we make this PI value to 4.0... or 5 ?
   //if yes how and if no why?


   //Basically we dont able to do that brcause.....


   ///talking about

   console.log(Math.PI)
   //output is 3.14...

   Math.PI = 4;
   console.log(Math.PI);
   //still the value will be same i.e 3.14....



//so

//    lets create an Object to understand

 const info = Object.getOwnPropertyDescriptor(Math,'PI'); //here if I will pass first name of the object whose I want to know about its property and after that I will pass the value which I want to know like in my case its about PI

//so this getOwnPropertyDescriptor() method will give us or show some hidden objects or features of an object..
console.log(info)
// output will be 
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false

//so this is the reason why we cannot change it beacuse someone has already donr hardcode on PI that its value will be 3.14.... and cannot be changeby telling writable is false

//so Like this we can also make our value writable false using same concept


//Now we can cretae our won descriptor properties in out object..

//Example

const user = {
    name: "Bikram",
    age: 22,
    address: "Upper Parakha",
    learning: function(){
        console.log('JavaScript')
    }

}
// user.name = "Ram"
// console.log(user.name);

//Now here I can write another name means I can change the value of name so i want to remove that writable so Using Decapitaor I can do that

 console.log(Object.getOwnPropertyDescriptor(user , 'name')) // pass name of object then the key of an object
//
// value: 'Bikram',
// writable: true,
// enumerable: true,
// configurable: true
 //to change this we will use defineProperty

  Object.defineProperty(user , 'name', {
        writable: false,
        enumerable: false,
        configurable:true,


  })
  //now lets check 
  console.log(Object.getOwnPropertyDescriptor(user , 'name'));
  //  value: 'Bikram',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

//now I have changed the Decapipator of an object

//now I can change the value of the object
user.name = "Ram";

// console.log(user.name); //Bikram


//enumarable means looping or iteration

//lets try that also

// for (let [key , value] of user) {

//     console.log(`${key} , ${value}`)
    
// }
//I cannot pass object directly like that user actually I want to use iteration on user values so i have to define it
// like

for (let [key , value] of Object.entries(user)) { //this is the correct way

    if( typeof value !== 'function'){ 

        console.log(`${key} , ${value}`);
    }
}

//Now it cannot iterate on name because I have done it false...


//thats it all about the object Decapitator..

//Happy coding