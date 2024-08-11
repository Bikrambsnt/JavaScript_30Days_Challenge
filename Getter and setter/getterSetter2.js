

//getter Setter without class...


function user (email , password){
    this.email = email;
    this.password = password;

//now we will take Objectdefine to define getter and setter...


Object.defineProperty(this,'email',{ //here we will use  this to define global context because it doesn't contain its own this we have to give this to it
        get: function(){
            return this._email
        },

        set: function(value){
            this._email = value
        }
});

Object.defineProperty(this,'password',{

    get: function(){
        return this._password
    },

    set: function(value){
        this._password = value
    }
}) ;

}

const detail = new user ('abc@gmail.com' , 'abc');
console.log(detail.email)
console.log(detail.password)