//Here i am going to manage the n number of arguments passed by the user in function
//Suppose if we dont knoe how many arguments are coming into the function....

//Example////

const calculateParkingPrice=function(Price){ //Here any number of arguments can be pass

    return Price;
}
console.log(calculateParkingPrice(56));//Now Here i dont know how many arguments are going to add.suppose its only 1 then we can easy get that value

//But if we try to add more than one value then it will give us only the first value and rest will be ignored by Javascript....

console.log(calculateParkingPrice(56,25,65)); //Here 35 and 65 will be ignore..

//Now to fix this problem we will use "REST OPERATOR"
//Syntax will be ...  yeah its same as Spread oprator just name will be change acoording to iyts work

//Using Rest operator we can pass any amount of argument we want..

const calculateParkingPrice2 =function (...price){ //Here i have pass rest oprator to take any amount of argument

    return price;

}
console.log(calculateParkingPrice2(3,5,3,2));//now we can pass any amount of argument and It will store than in a array form[]
//Easy Right....

//Now what if I pass parameters along with rest operator
//Example

function calculateParkingPrice3(num1 ,num2 ,num3 ,...price){
    return  price;

}
console.log(calculateParkingPrice3(3,5,6,7,4,3,6,7,4));//Here 3,5,6 will be store in num1,num2,num3 and rest will be store in rest operator(price)...

//Intresting Right..


//Passing object and array on function....

const myObj ={
    name:"Bikram",
    age:22,
    learning:"Javascript"

}

const passObj =function(getMyObj){//Here am passing an parameter for that object
        //console.log(`Hi my Name is ${getMyObj.name} I am ${getMyObj.age} Year old and am learning ${getMyObj.learning}`);
        return `Hi my Name is ${getMyObj.name} I am ${getMyObj.age} Year old and am learning ${getMyObj.learning}`
}
//passObj(myObj)
console.log(passObj(myObj));//Here i am passing that object name on argument.
//Remember we can give any other name on parameter but while calling function we need to give the actual obj name...

//OR we can directly call or create an object inside the function like

function myObj2(getMyObj2){
    return `Hi my Name is ${getMyObj2.name} I am ${getMyObj2.age} Year old and am learning ${getMyObj2.learning}`;

}
console.log(myObj2({
    name:'Bikram Basnett',
    age:22,
    learning:'Programming'
}));

//Easy right...

//Same goes for the array also//

const array=[2,4,6,5,3,6,3,33];

const myarr =function(arr){
  return arr[4]; //Here i am saying which index of array i want.... 
  //if i want all array just remove that index of an array[]...
}

console.log(myarr(array));//Is that simple...


//array inside function...

const myarr2 =function(arr2){
    return arr2;
    //OR
    //return arr2[3];
}
console.log(myarr2([3,5,3,2,55,7,5]))


//Thats much for function.. more deep discussion right away...

//Happy Coding...

