
//In javaScript static keyword is used to stop or remove access from some class oe method...

//example...


class user {
    constructor(username , password){
        this.username = username;
        this.password =password;


    }

    display(){
        return `USERNAME:${this.username}`
    }

    static displaypass(){ // now it will stop and wont be executed
        return `${this.password}`
    }
}

const showUser = new user('Bikram' , '123');

 console.log(showUser.display());
//  console.log(showUser.displaypass());

 //Now suppose I dont want to display password in this method so I will use static keyword in that method which i want to remove or stop

 class child extends user{
    constructor(username,password,email){
        super(username,password) //to get access the parent 

        this.email = email;
    }
 }

 const showChild = new child('Child', '123' , 'child@123');

 console.log(showChild.display());
 console.log(showChild.displaypass())//here also i cant access it


 //thats It for the Class and Constructor

 //easy Right

 //happy coding