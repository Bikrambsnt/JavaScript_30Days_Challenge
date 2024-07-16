//switch case also work as a if and else condition...

//syntax
// switch (key) { //here key means which condition which you want to check ...
//     case value: //value refers to the value which i want to check for match
        
//         break;

//     default:
//         break;
// }

//example...

 let myName ="Bikram";

   switch (myName){
    case "Shyam":
        console.log("Hello shyam");
   break;
    case "Ram":
        console.log("Hello Ram");
   break;
    case "Bikram":
        console.log("Hello Bikram");
break; //It is used to break the ststement if the condition meet true and the furthur below will not be checked
    case "Rohit":
        console.log("Hello Rohit");
break;

    default: //This will give the default value if non of above condition will match with the  key value
        console.log("Your Name doesn't Match here");
    break;
   
   }

   //we can pass number also on case like

   const number =3;

   switch (number) {
    case 1:
        console.log("no");
         break;
    case 2:
        console.log('No');
        break;
    case 3:
        console.log("Yeah you got that number");
        break;
   
    default:
        console.log("Oops condition does't match");
        break;
   }

   //Thats it for switch case Easy right...

   //Happy coding..