document.addEventListener('DOMContentLoaded', function(){
const result = document.querySelector('#result ul');
const showError = document.querySelector('#error');
const submit = document.querySelector('#submit');
const userInput = document.getElementById('search');
const cardBg = document.getElementById('card')


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
            showError.innerHTML ='';
        }
        getWeather(location);
    }
});


const getWeather = async  (city)=>{

const api_Key = '9525b7d9f20542659ef135449240904';

const api_Url =`http://api.weatherapi.com/v1/current.json?key=${api_Key}&q=${city}&aqi=no`//Api url 


    try {
         const response= await fetch(api_Url)//calling the api and making request.
         if(!response.ok){
            throw new error(`Opps Something Went wrong${response.status}`);
         }

           
         const data = await response.json();//converting into Json 

         console.log(data);
         displayWeather(data)

    } catch (error) {
        
        console.log('ERROR:' ,error);
        showError.innerHTML ='An Error Occurs While getting your Data! Please Try again';

    }

}

const displayWeather =(data)=>{
    
 if(data.error){
        showError.innerHTML ='No Matching Location Found'
 }

 else{
//update the Date to localDate string
const last_updated = new Date(data.current.last_updated).toLocaleDateString('en-IN');
const date = new Date (data.location.localtime).toDateString();
//update time as per the object passed.
const time = new Date (data.location.localtime).toLocaleString([],{
    hour: '2-digit',
    minute:'2-digit',
    second:'2-digit'
})
result.innerHTML =
 
`
   <li class="country"> ${data.location.country} ${data.location.name}  </li>
   <li class="displayTime"> ${date} ${time} </li>
   <li class='temperature'>${data.current.temp_c.toFixed(0)}&deg;C </li>
   <li class ='icon'><span id='text'>${data.current.condition.text}</span><img src = "${data.current.condition.icon}" alt="weather Icon"> 
   </li>
   <li class="lastUpdate">Recent Update:${last_updated} </li>
   <li class="line"> </li>

   <li class="humidity-feels">
  <span> Humidity: ${data.current.humidity}</span>
  <span> Feels like: ${data.current.feelslike_c.toFixed(0)}&deg;C</span>
  </li> 

  <li class="wind-cloud">
  <span>Wind: ${data.current.wind_kph}Kph</span>
  <span>Cloud: ${data.current.cloud}</span>
  </li>
   
   
   
   
   `;

//Change Backgroung Image as per weather text...
    let situation = data.current.condition.text.toLowerCase();
    let backgroundImages =''

    switch (situation) {
        case 'sunny':
        case 'sun':
        case 'clear':

            backgroundImages= "url('images/sun.jpg')";
            
            break;

            case 'patchy rain':
                backgroundImages = "url('imaages/pitchy.jpg')"
        break;

        case 'patchy rain nearby':
            case 'cloudy':
                case 'light rain shower':
                    backgroundImages = "url('images/cloudy.jpg')"
                    break;

         case 'rain':
            case 'raining':
                backgroundImages = "url('images/rain.jpg')";
                break;
    
        default:
            backgroundImages = "url('images/main-bg.jpg')"
            break;

    }

        cardBg.style.backgroundImage = backgroundImages;
   


 }
}










function displayError(){
        showError.innerHTML ='Invalid Input! Please Enter Location';
}

});