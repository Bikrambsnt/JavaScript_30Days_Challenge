//Here if else statement is used to check the statement of either it is true or fasle

//If the statement is true then it will go inside the if scope otherwise it will be false..
 
    //Like if i am hungry i will eat food else I wont..

    //Example


    //Syntax will be 
     // if( here we will pass the condition ){}
     //else{}  //in else we dont have any parentheses...

     //And here we will use different operator to comapre the  value like
       
     // = ,== , === , > ,< ,! , !== etc...
     // ! this oprator is used to revert the value like true to false and false to true..
     // == this oprator is used to compare the two value..
    // === this oprator is also use to compare the value but in a strict form...

     if (2 == "2"){ //This will not check the value properly it will check it loosely...
        console.log('Executed');
     }

     //But 

     if(2 === "2"){ //This will not be executed because === operator check the value strictly..
        console.log("Executed");
     }

     // others example

     let name="Shyam";

     if(name != "Bikram"){ //This will executed because i said name is not equal to and passed the value "Bikram"  and name contain the value as "shyam "
    
        console.log("I am executed");
     }

     let temperature =40;

     if(temperature > 21){ //It check if the temperature is greater that 21 then say its hot which is true
        console.log("Its hot");
     }

     //Similar goes to > also

     //Now with else
     //In else if the if condition is false then else conditon will be executed..

        
     const money = 400;

     if(money < 500){ //In this condition it goes to true statement
        console.log("save money");
     }
     else{
        console.log("Buy something");
     }

     const score = 510;

     if(score < 500){ 
        console.log("We are loosing");
     }
     else{ //now its false so it goes to else statement
        console.log("We are winning");
     }


     ///Thats the use of if and else ...


     //Now there is a concept of nested control flow...

     //in which we will check for more than 2 condition like


     let age = 15;

     if (age <=5 ){ //here i am check smaller or is exectely 5
         console.log("You are a child");
     }

     else if(age <=17){
        console.log("You are a teen age");
     }



     else{
        console.log("You can do vote now");  
     }

     // if we want ot check 2 condiiton at a same time then we will use 
     //AND (&&) and OR (||) operator 

     const hasName =true;
     const loggedIn =true;

     //Now if i want to check if both are true or not then

     if(hasName && loggedIn){ //&& operator aly allows true if the both condition is true 
                             
        console.log("Hello User")
     }
 
     const logginGoogle =true;
     const logginEmail =false; //Now this will get false if i check through && operator so i will use OR operator here

     if(logginGoogle || logginEmail){
        console.log("hello")
     }

     //Thats it //
     //Happy Coding////