document.addEventListener('DOMContentLoaded', function(){
const result = document.querySelector('#result');
const error = document.querySelector('#error');
const submit = document.querySelector('#submit');
const userInput = document.getElementById('search');

// const api_Key = '9525b7d9f20542659ef135449240904'
// const api_Url = 'http://api.weatherapi.com/v1/current.json?key=9525b7d9f20542659ef135449240904&q=Singtam&aqi=no'


submit.addEventListener('click' , (e)=>{
     let location = userInput.value.trim();

     if(location ==='' || !isNaN(location) ){
        displayError();
        }
        else{
            error.innerHTML=''
        }

        getWeather(location); //passing the location to getWeather
});

userInput.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        let location = userInput.value.trim();
        if(location ===''||!isNaN(location)){
            displayError();
        }

        else{
            error.innerHTML ='';
        }
        getWeather(location);
    }
});


const getWeather = async  (city)=>{

const api_Key = '9525b7d9f20542659ef135449240904'

const api_Url =`http://api.weatherapi.com/v1/current.json?key=${api_Key}&q=${city}&aqi=no`//Api url 


    try {
         const response= await fetch(api_Url)//calling the api and making request.

           
         const data = await response.json();//converting into Json 

         console.log(data);
         displayWeather(data)

    } catch (error) {
        
        console.log('ERROR' ,error);

    }

}

const displayWeather =(data)=>{
    
 if(data.error.code === 1006){
        result.innerHTML =' No Matching Location Found'
 }

 else{

result.innerHTML =
`
                    <h1>${data.location.country} ${data.location.name}</h1>`

 }
}









function displayError(){
        error.innerHTML ='Invalid Input! Please Enter Location';
}

});