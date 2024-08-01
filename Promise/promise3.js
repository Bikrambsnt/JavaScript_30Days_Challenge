//Here lets try different approach to consume promise rathen then .then() , .then() method
//here we will use async await to do it..

//and while using async and await we need to wrap its inside the try catch method remember that..

//example

const myPromise = new Promise((resolve ,reject) =>{

 
    setTimeout(()=>{
        // let error = true // if I do this then error will be executed
        let error = false;
        if(!error){
            resolve({
                name:'Bikram',
                age:22,
                email:'example@gmail.com'
            })
        }
        else{
            reject('ERROR! please Try again');
        }
    },1000);
})

//now instead of using then and catch method  I will use async and await method

   async function promiseComsume(){
    try{    
        // await Promise//remember promise is a object so dont pass any parenthness like this promise()
        //
        const response = await myPromise;
        console.log(response);
        console.log(response.name)//Like this I can access the specific value also
       
    

    }  
    
    catch (error){
        console.log(error);
    }
   }

   promiseComsume(); //calling the func


   //Now lets understand about fetch()

   //This is the most powerful method or we can say a library or a object which we can use to send request to the api and can able to get data

   //example am using some api url here


   async function getData() {

    // const response=await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(typeof response) //we have to check it because its always came in a String foemat so lets convert into object

    //             const data= await response.json() //we need to use wait in this convertion also because it also take some time to do conversion

    //             console.log(data);

                //But this above code is not wrapped in try catch so its not going to work so for that lets make t more suitable using try catch

                try {

                    const response = await fetch('https://jsonplaceholder.typicode.com/users')
                        //now its always came in string so need to convrt in object

                        const data = await response.json(); //need to use await here beacuse it also take some time to do conversion
                        console.log(data);
                        //and if I want specific value from that array object provided by the api then I can do

                        console.log(data[1].name);


                } catch (error) {
                    console.log('ERROR' ,error);//catching error
                    
                }

}

//  getData();


//thats how we can get the api from fetch...

//now If i want to try from .then() then

///


 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
        return response.json();
        
 })
 //chaining 
 .then((data)=>{
    console.log(data)
    console.log(data[1].phone);
 })
 .catch ((error)=>{
    console.log('ERROR' ,error);
 })
 //easy right..
 //thats how we can get the data or we can fetch the data using promise async await or using .then,.catch.
 //Now there is intresting thing is there notice that in this code fetch is going to execute firts even at first we have a code of object try and catch..
 //for this concept talked on another file then is fetch..

 //Thats it

 //Happy coding