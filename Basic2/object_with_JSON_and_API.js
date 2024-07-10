//De Structure of an Object...
//Basically in this we will fix the rewrite of . whike accessing object example

const myLocation={
    Address:"Gangtok",
    current:"Namchi",
    Hometown:"Upper Parakha",

}
//Now to access thes properties we have to do which is time consuming and confusing 
// console.log(myLocation.Address);
// console.log(myLocation.current);

//SO better we will do

//Syntax
//const {} = objectname

const {Address} =myLocation;//using this method it will decrease the using . operator agan and again
//we can change the key also to its short form
const {Address :adr} =myLocation;
console.log(Address);
console.log(adr)

//JSON AND APIS
//Json syntax
{

}
//example
//In json both key and values are in string format
// {
//     "name":"Bikram",
//     "Age" : 22,
//     "Learning": "Javascript"
// }

//Apis are can be on JSON format or on a Array format like

[
    {},
    {},
    {}
]
//Like this......
//Further full details will be on later on file...

//Happy Coding...