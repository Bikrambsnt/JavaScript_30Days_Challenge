//defining function use function keyboard

function sayHello()//In this ()refers to parameters 
{
console.log("Hello");

}

sayHello();//() here it refers to arguments
//When we pass a value then it will be on argument and when we take the value then it will be on parameters...

//++++Function to add numbers..

function add(num1,num2){//Here i have pass 2 num1 and num2 that is called parameters..
    console.log(num1+num2)//Here i am adding the value whatever it holds on num1 and num2



}
//Now i will call the function
    add(2,5);//Now here i will give the value which i want to add

//Now suppose i want to store the 
const result =add(2,5);
console.log("result",result);//Now this is how we think we will store the function result in another variable but its wrong it will give the ans as undefine


//To fix this issue we will use return statement

function addAgain (num1,num2){
    // let result = num1+num2; //Here i have declare the variable to store the num1 and num2 value
    // return result;//Then here  i have return that result...
//Instead of that above we can do like this which is fast and memory constraint..
return num1+num2;
//Now its not possible to declare any other code after the return statement it will not going to execute it/
//So it is useless to do
console.log("hello")
}
const result2 =addAgain(3,52);
console.log(result2);

//More on function 
 function startLearning (javaScript ="Bikram"){//Here we can pass default value also if you want default value
    //if(javaScript===undefined){ //OR I can do this also instead of this  //Here am checkng if javascript argument is undefine than print that error message
    if(!javaScript){
        console.log("Please enter the usename of user in that argument");
        return; //Here we have return because if that statement goes insde that if condition than due to return then below code will never execute...Simple is that

    }
    return `${javaScript} You have to learn This JavaScript`//here i have pass return with string Interpolation

 }
 // startLearning("User");//Now this code will never goign to print because we have not write the statement to print it
//So we will do
console.log(startLearning());
//Now what if someone doent pass any arguments then???
//For this we will check using if else condition....


//More discusion on next filessss.............
//Happy Coding
