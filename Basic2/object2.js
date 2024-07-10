const anObj =new Object();
 anObj.name="I am Object",
 anObj.id="124",
 anObj.use="Lots of use";
 //console.log(anObj);//acccessinng object

//Now lets create object inside an object //Nested object

const livingOrg ={
     species:"Human",
     identified:1000,
     person:{
        gender:"male",
        height:20,
        identify:{
            name:{
                firstName:"Bikram",
                lastName:"Basnett",
                age:22,
                
            }
        }
     }


}
//Accessing this nested object
console.log(livingOrg.person.identify.name.firstName);

//Combining of an more than one Object

const obj1 ={1:"apple", 2:"Banana", 3:"Papaya",4:"Mango"}
const obj2 ={5:"Pumpkin",6:"peas" ,7:"Beans"}
//Now to combine this we can use spread operator or assign method

// const obj3 ={obj1,obj2}//This will not combine object as it will return thr value value
// console.log(obj3);

//const obj3 =Object.assign(obj1,obj2 );     // (target ,source)basically it will take source value and stotre in a target value
//Instead of this we can create a empty object as a target to store the source value like
const obj3 =Object.assign({},obj1,obj2);
console.log(obj3); 

//Using spread operator which is commonly use and easy to use 

const obje3 ={...obj1,...obj2};
console.log(obje3);

//Now when we get the data from database we will get it in a array form inse array we will get the object ...
//Example..
const userData=[
   {
    id:1,
    email:"Bikram@gmail.com"
   },
   {
    id:2,
    email:"abc@gmail.com"
   },
]
console.log(userData[1].email);//Accessing the value of an object through the array with a specific value...

console.log(Object.keys(livingOrg));//This method will return the keys value of the object in the foem of Array...
//Like it will give the all keys of the LivingOrg....
//This concept is most used in databse to fetch data ..


//We can get the value also as the key from the object ...
//By using value in the place of key

console.log(Object.values(livingOrg));//accessing value

//enteries property 
console.log(Object.entries(livingOrg));//It will give array inside an array with fisrst element as key and another as value

//We can check the value is presente dor not on object..
//using hasOwnProperty...
//example/ It will give the value in bollean either true or false..
console.log(livingOrg.hasOwnProperty('species'));
console.log(livingOrg.hasOwnProperty('living'));


//This much for object2
//Happy Coding......






