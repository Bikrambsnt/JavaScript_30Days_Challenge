//Here I am learning nested function with scope ...

//Nested function means function inside a function

const me =function(){
    const name="Bkram";
    function myDream(){  //Now the thing is that child can take anything from parents but parents cannot take thins from a child...
        const dream="To be a FSD";
       console.log(name);//I can take value from parent function because i am its child function//
     //But i can access that dream inside the scope which is here
     console.log(dream);
    }

    //  console.log(dream);   //Now when i try to take any value out of scope it gives me an errror so its not possible to accss any value from outside its scope
myDream(); //and if i dont call this chid then nothing will execute...because without executing its child parent itself cannot be execute...



}
me();

//Same example with if statement....


if(true){
    const name="Bkram Basnett"

    if(name ==="Bkram Basnett"){ //Am doing this to get inside this if statement...
        const age=22;
        //Now i can access this age only inside this scope like

        console.log(age);

        
        //I can acess that name here because i can take from parent
        console.log(name);

    }

    //And i can access name only inside this scope
    console.log(name)
    //I cant access that age here

}
//Neither i can access that age and name here

//Simple and Easy...

//Thats all about scope more on next file....
//Happy coding