

//Inheritace
   // Simple meaning is parent's childs....

 

   //example


   class parent {
    constructor (username,email){

        this.username = username;
        this.email = email;

    }
    show(){
        console.log(`Username ${this.username}`)
    }
    //now with the help of ectend keyword we can create its child//
}

    class child extends parent{
     // for accessing that or overwriting that username i will use super keyword
     constructor (username , email, password){
     super(username, email); // super will bring this, call keyword to parent class to get the value from it or to replace the value on it
        this.password = password
        //now here If i want to get the parent username then I cannot directly do
        // this.username = this.username
      
     }

     showPassword(){
        console.log(`password is ${this.password}`)
        console.log(`${this.username}`)
     }


   }

   const aboutChild = new child ('Bikram' , 'example@123' , 'abc')
   

   aboutChild.showPassword()

   const aboutParent = new parent ("bikram");

//    aboutParent.showPassword() //It doesnt have the access to the child method
aboutParent.show();
aboutChild.show();
//now In this remeber that the child will override the parent username because of the super key..



