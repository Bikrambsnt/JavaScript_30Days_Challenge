

//Getter and Setter in class

// /example

class user {
    constructor(name, email,password){
        this.name=name;
        this.email=email;
        this.password=password
    }

    //Now there is a concept of getter and setter

    //getter is used to get the value which is set by the setter and 
    //setter is used to set the value on class
    //getter 

    get password(){
        // return `${this.password.toUpperCase()}`;
    }

    //setter

    set password(value){ //it takes a value also which is need to be set

        // this.password = value .toUpperCase();

    }

    //now by doing this it get a error or a problem that is called as overflow..
    //RangeError: Maximum call stack size exceeded

    //it actually occurs beacuse both constructor and setter will start to set the value and it will keep setting..

//Now to fix this issue we nned to declare new valriable for the getter and setters... through that constructor and getter,setter variable will get change an they will store independently,


    get password(){
        return `${this._password.toUpperCase()}`
    }

    set password(value){
        this._password = value.toUpperCase()
    }

    //Now it will work fine
    
    //Here it will get the value which we will give and it will set the value which is given by get..
    
    //So here while getting the value we can do modification also like what we an actually want to display without changing the value while setting..
    //Example

    get email (){
        return `${this._email}  is your Email`
    }

    set email(value){
        this._email = value
    }
}


    

const userDetail = new user('Bikram' , 'example@gmail.com', 'hello');

console.log(userDetail.password);
console.log(userDetail.email) //example@gmail.com  is your Email here its storing the actual email but I can display what I want to without changing on setter


//thats it about Getter and setter..

//Next file contain how to do this or how can we use getter and setter without class...

//Happy Coding..