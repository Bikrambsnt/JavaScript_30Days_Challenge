function user(email, password) {
    // Assign initial values using setters
    this.email = email;
    this.password = password;

    // Define getters and setters
    Object.defineProperty(this, 'email', { 
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value.toUpperCase();
        }
    });

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value.toUpperCase();
        }
    });
}

const detail = new user('abc@gmail.com', 'abc');
console.log(detail.email);   // Outputs: ABC@GMAIL.COM
console.log(detail.password); // Outputs: ABC
