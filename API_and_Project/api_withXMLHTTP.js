//SO the below note is the method which is used to call the api .. it has total 5 stages started from 0 to 4


// 0    UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.

//Example...

//To send the request we need to use xhr method followed by new keyword

   const xhr = new XMLHttpRequest(); //This is a method to get the request and it use the new keyword because its a Object.
   const getUrl ="https://api.github.com/users/Random";
     xhr.open('GET' ,getUrl) //so this is the open which is a method used to send the request. it takes 2 parameter one is request method and another is the request URL
     // The open is not itself a call so  we need to call that request using send() method

    //Now after sending the request the request will start to change , means the status code(that above one 0,1,2,3,4) will get change
//So to track that or to get that changed value we will use readyState .
    //  console.log(xhr.readyState);     //Now this will give the the changed value.. like its 0 at first after request it gets 1 etc.
    
            //Now if I want to monitor or trace the continue change status then I will use onreadystatechange which will take a function.

            //
            xhr.onreadystatechange = function (){//as I said above it will take a function to work now we can trace it.

                console.log(xhr.readyState);
                //output will be 2 ,3 ,4
                //Now if the stage is 4 then i want to do something so
                
                if(xhr.readyState===4){
                    console.log(this.responseText)
                    // here responseText is used to print that value which is sended to us through our request.
                    //Here we need to use this keyword because we need the value of the current context that why this is required.
                    //Now  have got the value so I can get any data so first lets hold that responseText data in a varible

                    const data =JSON.parse(this.responseText);
                    

                    //now I can get the data

                    console.log(data.location);
                    //That is how we get the value from object...
                    //but this will give me undefine.. because lets check its dataType

                    // console.log(typeof data);  //output 'string'
                    //That means we will get the value mostly on a string type so we neeed to convert that first in a object to access it
                    // to convert we will use JSON.parse parse will convert that string into JSON which is object
                   //so I have to change the string value in  const data =this.responseText; because this will give me the value so I will change that above using JSON
                     

                   //Now I will get the object and now i can access it using .

                   console.log(typeof data) //output object

                   console.log(data.id);
                   console.log(data.followers);

                   //so Like this we can send the api request and get the data using XMLHTTPrequest method.
                   //there is other technique also like fetch.. that is discusse later...
                   
                }

            }


     xhr.send();
  


//More example....

const get = new XMLHttpRequest();
 const url ='https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year';
get.open('GET' , url)

 get.onreadystatechange = function (){
     console.log(get.readyState);

    //  console.log(this.responseText);
    const hold = JSON.parse(this.responseText);

    console.log(typeof hold);
    console.log(hold.kind);
    console.log(hold.data.dist);

    //so this is how we can get the API data

    
    }
 


get.send();

// thats it for API
//Easy Right
//Happy Coding