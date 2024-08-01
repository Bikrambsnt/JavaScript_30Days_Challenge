const result = document.querySelector('#result');
const error = document.querySelector('#error');
const submit = document.querySelector('#submit');
const userInput = document.getElementById('search');

submit.addEventListener('click' , (e)=>{

    weatherApp();
});

userInput.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        weatherApp();
    }
});





function weatherApp(){
    //api Call
    let input = userInput.value.trim();
    if (input === ''|| !isNaN(input)){
        displayError();
    }

    else{
        error.innerHTML ='';
        // result.innerHTML ='Hello';

    }
}


function displayError(){
        error.innerHTML ='Invalid Input';
}