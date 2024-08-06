
//Now lets undersatnd some thing about string...

// 
const str = 'Bikram';

console.log(str.length)// easy right 

//but what if I got string like this

const str2 = 'Bikram         ';
console.log(str2.length) // now it will give me wrong answer right..
//so how can I fix it  I can fix it like

console.log(str2.trim().length)// But this is not what I want

// I want something which need to be metod and I can use it for all string at once like..

// console.log(str2.trueLength())//i want something like this...

//so lets understand how can I achhieve that,....




 let fruits = ["Apple" , "Banana" , "Mango" ,"Guava"]


 let fruitsBenifit ={
    apple: "Keeps Doctors away",
    banana: "Rich in vitamins",
    mango: "Everone loves It",
    guava: "Improve immunity",


    aboutapple: function(){
        console.log(`about apple${this.apple}`) // need to use this to tell whome i want to call in current context


    }
    
 }

 //now what if I can do to acess it

//  fruitsBenifit.tell() //Now can I do this? to get the access?

//Now if I can able to tell to object that fruitsBenifits.tell is the object prototype then I can access it because everything will get passed through object

 //so lets do it

 Object.prototype.tell =function(){
    console.log('tell is present in an Object');
 }
 //now I can acess it because I have told that to object that tell is also available in prototype..

 fruitsBenifit.tell(); //got the output as // tell is present in an Object
 //now everything goes from object so that the array can also be able to access it



 fruits.tell();//output tell is present in an Object

 //Now lets test more by adding prototype in array also

 Array.prototype.tellHello = function(){
    console.log('Tell wants to say Hello');
 }

 //now I can access it by array, but should not be accessed by object let check

 fruits.tellHello();
//  fruitsBenifit.tellHello() //so it will gave an error that it has no access on it because it always goes like arrray -----> object-----> null so if I have define it in array inly then how is it possible that object will get its access right.


//Lets understand Ingeritance also and lets understand how we can combine two object also so that it they can take each other access..


const user ={
    name:'Bikram',
    email: 'Example@gmail.com'
}

const car = {
    name: 'Supra',
    isAvailable: true
}

const manager={
    hasOnDuty: false,
    email:'abc@gmail.com'
}
const salesMan ={
    isAvailable:true,
    name:'salesMan',
    //Now if I want to combine or give an acess salesMan to  manager also then  have to do combine this object so
    //to combine we can use proto 

    __proto__:manager //this is how I can combine..
}
//I can do it here also

user.__proto__=car; //here user can access car properties

//But the modern syntax is also availabe which is 


Object.setPrototypeOf(salesMan ,manager) // it will take 2 object who will access whose object.

//Its same and both are correct....


//Now lets fix that first one problem

const anotherUser = "Bikram      "

String.prototype.trueLength =function(){
    console.log(`${this}`)
    console.log(`The True length is ${this.trim().length}`);
}

anotherUser.trueLength()
"ram".trueLength()
"example".trueLength()

//This is how we can do that thingsssssss ...

//Its easy right..
//Thats It all about prototype..

//happy coding