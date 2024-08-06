        //What is prototype in js and why its so Important

        //Javascript is a prototype based language that  means it will provide a prototype .

        //javaScript will access parent grandparent and so on to find the value which progrm ask for till it gets null value

        //which means javaScript wont Give up if it is unable to find the required value in a same element,
        //it will ask parent , grandparent and so on for the refrence value untill it gets null...


        //from this prototype we will able to access , this ,classes , new keywords in javaScript


    //JavaScript tretas everything as a object either its a array[] , or a string, and even a function also...


    //lets understand it more deeply

         
    //  array[] ---------------> object ---------> null;  /// after object it will be null  because after object ehere to no so refrence eill be null means thats the end//object prototype is null
    //string ------------------> object-----------> null;
    //function ----------------> object ----------->null;

    //in js function is a function also and also a abject

    //example


    function doSomething(mul){

        return mul*2;
    }

    console.log(doSomething(3))//it is simple
    //but i can treat this function as a object also using . operator

    console.log(doSomething.length)// like this
    console.log(doSomething.prototype)//I can access its prototype also
    console.log(doSomething.name)//

    //thats the fact at the end Js takes everything as a Object...


    //Lets understand more deeply


    function user(userName , age){
            this.userName = userName ;
            //this is used to define which one id my variable wnd which one is the parentheses
            this.age = age;
            //now it will know which one is my variable and which one is the parenthesses because I can't do this
            //userName=userName // now it will get confused what am trying to do.

    }

    //now I can add a prototype also in my function beacause it takes

    user.prototype.increment = function(){ 
        //noe here I have declared increment as a prototype of my function so now this increment can do anything
      //  age++;           //incrementing age.. // but here the problems occurs i cannot directly write age here 

        this.age++// now it knows those who call it then just go to them and increase the age
    }

    //beacuse what if two user are accessing the same function then whose age should need to be increment like

//lets inject another prorto type also ..

    user.prototype.printUser = function(){
        // console.log(`User age is ${age}`) // now here also I cannot directly say age// i Have to tell whose age so I will use this
        
        console.log(`User age is ${this.age}`); // now it knows whose age in the current context..
    }



    const userOne = new user('Bikram' ,10);
    const userTwo = user('Ram' , 20); // now that increment dont know whose age should be Incremented...
    //because it doen't have the context which can guide them to increase a specific user age..
    //so to provide that context we will use this...    

//Now to fix that we will use this in age to say that ( those who are calling me then just go to them.)

//Now lets access above function...

//To access that i can directly access it 
// userOne.prototype.printUser()// no need to write this whole thing to access it we can do it simply by saying

userOne.printUser() //the error is  Cannot read properties of undefined (reading 'printUser')
//Now it will give an error because of some thing that we miss to do

//the problem is that we haven't say  const userOne = user('Bikram' ,10); here that there are some other functions also from where it sould take data too..
//so to tell that we need to use new keyword...
//like     const userOne =  new user('Bikram' ,10);// so this is the method to do it

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Now lets Understand what will happen behimd the scene when we write new keyword.


  // 1. A new object will be created...
  // 2 . A prototype will get linked to a prototype property of the  constructor function
  //3 . The constructor will be called  in which everything will get wrapped like this keyword, refrence etc
   //4 .The new object will be returned ... here we will get our output..



//thats it here we the focus was to understand about new and this keyword....

//Next file will be all about prototype..

//Happy coding




