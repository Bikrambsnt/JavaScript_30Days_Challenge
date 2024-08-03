//

//Object Literal Example

   const user = {
    //This are refer to properties of an Object

        username: "Bikram Basnett",
        age:23,
        signedIn: true,
        age:22,

        //This is the method of an abject
         
        userDetails:function(){
            // console.log("Got User Details");
            //Now lets understand this keyword.

            // console.log(`Username:${username}`);//If I do this it will gave me an eror the reason is that 
            //The username doesnt know about which username am talking because username can be many so to fix this issue we use this keyword
            //this keyword will see the username which is in a current context and from there if the username is available then it will give me its value.

            //So basically this will target the current context.

            console.log(`Username:${this.username}`) //now this will know which username am talking about.

            //if i print this and see what is inside this current context then I will got

            console.log(this) //now I got the properties of the obj. which is the current context of user.


        }


   }

   console.log(user);
   console.log(user.userDetails())//because its a method to call it using (). ..
   //Now it will give me undefined ...


   //And If I print this here Then I will get the empty object
   console.log(this);//output {}.
   //Because it doesnt have anything inside the window of this page.
   //But if we print this in a browser console then we will get lots of things because browser owns lots of object insie the window like dom etc.

   //Now lets Understand Constructor

        //we all are using new from long time but actually what is this lke

        // const promse = new Promise();
        // const date = new Date();

        // so here what is this new 

        //So new is the keywordd which is a constructor function which allows us to create multiple instence from a same Object/



        //lets create a function to understand this ...

        function person(username , age , address , isLogged ){

            //now here if I create the same variable and hold this parentesses then 
            //It will be difficult which one is the variable and whic one is the refrence like

            // username = username
             //now here it will be very difficult to understand which one is variable.

            //so we can do 

            // myusername = username // but this is not a good approach and not a good pratice also

            // so better we will use this keyword like

             this.username =username;
             //now here in which this is added that one is the variable and another one is the refrence..
             this.age = age;
             this.address = address;
             this.isLogged = isLogged;

             return this // finally returning the object // It will return it defaultly but also we can do it.

             //thats how we can do 


        }
        //and now we will print it

        // const userOne = person("Bikram" ,22 ,"Pakyong" ,true); 

       //Now till here Everything is Ok but
        //When I create another person then the problem is occurs like

        // const userTwo = person('Basnett',20,"Nowhere",false);

        // console.log(userOne) 

        //Now it will give the the second value while printing First one even I am not calling or printing it it will just override is
        //So to fix this issue we will use new keyword.

        //Now keyword will not override anything but it will create  a another refrence which is independent from the real one.

        //So we will add in keyword in the person to make its new instance..

        const userOne = new person ("Bikram" ,22 ,"Pakyong" ,true);
        const userTwo = new person ('Basnett',20,"Nowhere",false);

        // now I can perint or access any onw independently

        console.log(userOne);
        console.log(userTwo)
        //So new Keyword will give you the instence of an object without any override or any changes.

        //New will generate the empty object at first which will called instance
        //Then constructor function will be called using key keyword. and it will pack all the argumens inside that

        //After that all that pack arguments will be injected into this keyowrd

        //And lastly it will be provided to us inside a function

        //Thats how New  keyword works

///////////We can check the metod also and instence of that object also like..

                function car(name , price , power){

                    this.name = name;
                    this.price = price;
                    this.power = power;

                  
                 return this;
                 

                }
              //Now I can check properties also 
              const details = new car('Supra' , 1000 , 200);

              console.log(details.constructor);//output [Function: Object] so it will give me my own object.
              console.log(details instanceof car) //true Because Ii have a instance of car.
         //Thats it all about constructor , New , this , objectInstance ...

         //Easy right

         //Happy Coding...
         







        