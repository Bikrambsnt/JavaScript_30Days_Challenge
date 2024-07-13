//In chaining method in js more than one method is used in a same method...


const nums =[2,4,5,3,33,56,777,43,2,6,8,665,43,212,67,43,8]

const numbers = nums.map( (num1) => num1+5 ); //Easy adding 5 on each value
console.log(numbers)//This is just am showing the filter concept can be used in map also...


//Lets understand the concept of channing...
//In channing we can execute multiple condition at a same time

const num = [1,2,3,4,5,6,7,8,9]

const hold =num.map((val) => val*10)//now i want to add +4 to every after after multiplication then again I use map
               .map((val)=> val+1)//Now here the concept is that this second map will get the value which is gets multiply by *10 directly before getting the value by second method the value will not going to return
               .filter((val) => val>=25); ///only after this filter the value will be return to hold variable
               
console.log(hold)

//easy right..


// Thats It about channing... .map() .filter() .map().map() and so on

//Happy coding....