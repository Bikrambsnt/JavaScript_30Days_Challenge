const input = document.querySelector('#input');
input.addEventListener('keydown', (e) =>{
    e.preventDefault();

        // console.log(e);
        console.log(e.key); //it will provide the key that is being pressed...
        if(e.key === 'Enter'){ //this key property provides the method to get the key value of every key..
            console.log('Enter key Pressed');
        }
});

//Thats all about key events
//easy right..
//Happy coding