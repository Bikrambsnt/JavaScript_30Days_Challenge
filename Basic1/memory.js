//stack 
//It stores primitive values
//example : variable, datatype, null etc.
// Heap
//It stores non premitive values 
//example : function , objects , reference

//Stack provide copy vlue of the original value when the value gets change

//Heap provodide the original value reference when change

//Example of stack

let myName ="Bikram Basnett";

 let getNewName = myName;

getNewName = "My new Name";
console.log(myName);
console.log(getNewName);

//example of heap

const obj = {
    name:"Bikram",
    email:"Bikram@123"
}
 let obj2=obj;

 obj2.name="New Name"
 console.log(obj.name);
 console.log(obj2.name);
