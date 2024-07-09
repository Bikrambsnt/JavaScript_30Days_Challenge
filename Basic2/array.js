// let array=[String];
// console.log(array)

// let anotherArray =new Array(3);
// anotherArray[0] =2;
// anotherArray[1]="Hi";
// anotherArray[2]= 9;
// console.log(anotherArray)
    

// let newArray =["Red" , "Blue" ,"Green"];
// newArray[newArray.length] ="yellow";
// newArray[newArray.length] ="Black";
// newArray[30] ="Color";
// newArray.length=31;

// console.log(newArray);
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Array methods
//Push POP Shift Unshift

const myarr =[2,3,5,6,4,6,4,3];
console.log(myarr);
myarr.push(9); //It will push the  value to last index of a array [example: 1,2 ,4 ,3 ,9]
console.log(myarr);

//POP
console.log("POP ARRAY")
myarr.pop()//It will remove the last element of a array
console.log(myarr)

//unShift 

const arr=[2,4,5,"Bkram" ,7,8,"Apple"];
console.log(arr);
arr.unshift(9);//It will insert the value in the 0 position of an array
console.log(arr);

console.log("SHIFT OF ARRAY");
arr.shift();//It will remove that first placed value from array
console.log(arr);

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///

//Splice and Slice of an array
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

const anotherArray =new Array(2,4,6,5,3,2,6,4);
console.log("A", anotherArray);
console.log(anotherArray.slice(1,4));//It will always execute last value of an array. 

console.log("B",anotherArray);
//SPLICE //
console.log('Splice ',anotherArray.splice(1,4));//Splice will remove the array value ehich is define in parentheses and also include the last vlaue of an array.
//Example arr[1,2,3,4,5,6,7,8,9]
//when i do splice hereof (1,5) which means from 1 to 5 it will remove [2,3,4,5,6 from the original array],
//And print that value and after that original array will contain [1,7,8,9].
console.log(anotherArray);




