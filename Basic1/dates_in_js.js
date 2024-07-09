const myDate=new Date();
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getFullYear());
// console.log(myDate.toISOString());
console.log(myDate.toLocaleString())

//Create own Date on js
 const myOwnDate = new Date(2024,0,4);//In js month start from 0

 console.log(myOwnDate.toDateString());

//more specific on date passing time also
const timeAndDate =new Date(2012 , 7,4,4,5)
console.log(timeAndDate.toLocaleString());

//Date with pattern

const pattern = new Date ("2024-01-24") //YYYY-MM-DD
console.log(pattern.toLocaleString());


//Timestamp

const timeStamp = Date.now()
console.log(timeStamp);//It wil give current time value in ms.

// to convert date into ms use .getTime()

console.log(pattern.getTime());
//To get time in second divide by 1000

console.log(Math.round(timeStamp/1000)); //remove decimal  using math

//Local string more concept

     const moreConceptOfDate = new Date();
     console.log(moreConceptOfDate.toLocaleString('default' ,{
        weekday:"long",
     }))//Now in side localstring we can pass object there