

  //Lets Understand the concept of call

    //Suppose if we have a functiona and we have another function which calls the first function then we will got the problem thta,
    // the second function will ignore that function and it will get out from the call stack without checking what is inside that function

    //example


    function firstUser (username){

        this.username =username; //till here its okay

    }

    //now I have another function which takes the first function refrence like..

    function secondUser (username ,email , age){
        firstUser(username);

        this.email = email;
        this.age = age;

    }

    const display = new secondUser("Bikram" , "Bikram@gmail.com",22)
    console.log(display);

    //Now here We will get the problem that my name will never get print... 
    //That means that function will get destroyed in call stack before it checks what is inside that function..
    //So fix this we neeed to tell it that the second User contains the first user functoncall using this keyword



    //

    function setUser(username){
        this.username=username;
        console.log("function has been Called");


    }

    function getUser(username,email,age){
        //now I will use call method to call that above function

        setUser.call(this,username);
        //Here I have used this , because in this context this is my another variable to hold the value of above function because when the first function will executed then it will get destroyed so to hold the value of that above function I will use this keyword here
        //remember I am using this to hold the value so I have used , comma not dot(.)
    this.email=email;
    this.age =age;
    }

    const dataDisplay = new getUser("Ram" ,"Example@gmail.com",10)
    console.log(dataDisplay)



    //Thats It all about Call and This 
    //Happy Coding
    