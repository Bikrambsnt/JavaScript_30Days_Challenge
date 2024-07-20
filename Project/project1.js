const main = document.querySelectorAll('.button');
const body = document.querySelector('body');

main.forEach( (buttons) => {   //Used forEach Loop
  buttons.addEventListener('click' , (e) =>{ //added eventListener to get the event.... that (e)  the call back function
    console.log(e);
    console.log(e.target);

    //  if(e.target.id === 'red'){
    //     // body.style.backgroundColor ="red";
    //     //Or we can do

    //  body.style.backgroundColor= e.target.id;
    //  }

    //  if(e.target.id === 'yellow'){
    //     // body.style.backgroundColor ="yellow";
    //     //Or we can do

    //  body.style.backgroundColor= e.target.id;
    //  }

    //  if(e.target.id === 'black'){
    //     // body.style.backgroundColor ="black";
    //     //Or we can do

    //  body.style.backgroundColor= e.target.id;
    //  }

    //  if(e.target.id === 'blue'){
    //     // body.style.backgroundColor ="blue";
    //     //Or we can do

    //  body.style.backgroundColor= e.target.id;
    //  }

//We can do this with switch case also...


switch (e.target.id){

    case "red": body.style.backgroundColor =e.target.id ;
    break;

    case 'yellow': body.style.backgroundColor =e.target.id ;
    break;

    case 'black':body.style.backgroundColor =e.target.id ;
    break;

    case 'blue': body.style.backgroundColor =e.target.id ;
    break;

    case 'green': body.style.backgroundColor =e.target.id;
    break;

    default:
        console.log("Invalid");
        break;
}

  })

  
})


// Thats it for Project 1 Easy right

//Happy Coding
