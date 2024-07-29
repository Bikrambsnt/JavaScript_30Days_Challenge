const main = document.querySelector('#main');
const picture = document.querySelector('#image');
const followers = document.querySelector('#follow');
const userName = document.querySelector('#name');
const error = document.querySelector('#error');



//Always remeber this thing//

// 0    UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.


//
const url ="https://api.github.com/users/Bikrambsnt";

const xhr = new XMLHttpRequest(); //request method

xhr.open('GET' ,url);
    //now it will take a onchange methd to get the ready state

    
   
    xhr.onreadystatechange = function (){
        console.log(xhr.readyState);//help to trace the request state...

        //now if the ready state reach 4 we need data so

        if(xhr.readyState ===4){
         
        // console.log(this.responseText) //it will give the response requested data from the API
        // const data = this.responseText;
        // console.log(typeof data)//convert it into json format means in a object

        const hold = JSON.parse(this.responseText)//now converted into object
        //  console.log(hold);

        followers.innerHTML = hold.followers;
        userName.innerHTML =hold.login;
        const pic =hold.avatar_url;
        picture.src =pic;
        // console.log(pic);
            }
        }
  

    xhr.send();


    //Happy coding
