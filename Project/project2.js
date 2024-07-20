const form = document.querySelector('form');

document.getElementById('submit').addEventListener('click' , function(e){
    e.preventDefault()  //This is used for to stop the auto submisson form while clicking on submit button..

      

 const height =parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
 const result =document.querySelector('#bmiResult');

 if(height ===' ' || height <0 || isNaN(height)){
result.innerHTML ="Please enter Valid Number";

 }
 else if ( weight === ' ' || weight <0 || isNaN(weight)){
 result.textContent ='Please enter valid number';
}

else{
    const calc = (weight /((height*height )/10000)).toFixed(2); //Formula

    result.innerHTML = `<span> ${calc} </span>` //Displayed in result.
}

})

//easy right...

//Happy Coding//