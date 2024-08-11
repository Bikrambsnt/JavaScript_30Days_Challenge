
//Getter and Setter with object



    const user ={
        _email :'example@123gmail.com',
        _password : 'abc',

        //when we use _ in front of variable then javaScript shows or consoder it as a private property or it is not accessable for a mormal user


        get email(){

            return this._email.toUpperCase();
           
        },

        set email(value){
            this.email = value
        }
    }

    const display = Object.create(user) //we can use factory function normally we use constructor functon which is by using new keyword

    console.log(user.email) //

    //Now here i have declare it as email not as _email and still it runs the reason is that when we define getter and setter then it will not get serious about _ which is placed in foront of it
    //


    //thats all about getters and setters..

    // Happy Coding