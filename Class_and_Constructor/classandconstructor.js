
//Class is define in javaScript after ES6 //

//so to create class we will use class keyword.

//example

class user {
  //here instead of parameter i will pass constructor and this constructor will be call by new keyword..
constructor(username,email,password){
        //now same make its variable and store it
        this.username = username;
        this.email =email;
        this.password = password;
}
//now lets create another method also inside this class

encryptPassowrd(){
    //this is a method not a function

    return `$37aMans${this.password}@#44%nas` //encrypted password


}

//Anoter method
changeUsername (){
    return `${this.username.toUpperCase()}`
}
    
}

//now make a refrence of user using new keyword and call the constructor

        const displayUser =  new user("Bikram" , 'example@123' , 'abc');
        
        console.log(displayUser.encryptPassowrd())
        console.log(displayUser.changeUsername())
        //easy right


//Now lets see how we can do that If Class keyword is not available

//Now concpet goes to prototype

function user2(username ,email,password){
    this.username = username;
    this.email = email;
    this.password = password;

}
//now to make a method we will use prototype in that above function

user2.prototype.encryptPassowrd = function(){
    return `${this.password}anc#45`
}

user2.prototype.changeUsername  = function(){
    return `${this.username.toLowerCase()}`
}
user2.prototype.showEmail = () =>{ // I can use arrow function also

    return `${this.email}`

}

const userInfo = new user2 ('RAM' , 'ram@123' ,'abc');

console.log(userInfo.encryptPassowrd());
console.log(userInfo.changeUsername());
console.log(userInfo.showEmail()); // Now It will give me undefined error in this Line..
//Can you solve It why???....


//thats it about constructor its Easy now 

//Happy coding


