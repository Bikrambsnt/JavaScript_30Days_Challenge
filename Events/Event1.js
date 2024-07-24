//Now How the actually Event Listener works..
//EventListener will litsen to the events that user performs like mouse click,mouse hover, drag ,drop .keybpard press etc...

//Lets take a example....



document.getElementById('card1').onclick = function (){ //This is the normal way that how we can use eventListener but do not use this its not a good practice better we can do
    
    alert("card 1 Has been clicked");
}

//So this is the better option to use event listener
document.getElementById('card1').addEventListener('click', function () {
    alert('card 1 has been clicked');
})

//And remember Event listener take third paremeter also that is true or false.. like

document.getElementById('card1').addEventListener('click', function () {} ,false /* Or* true */)
//But normally its always flase so some applicaton need this type of paremetr also in which it is mandotory to mention either its true or false.

//There is more event listener like

// attachEvent()
//jQuery - on

//So Event listener has a event object which is the most important thing....

//Example...

    document.getElementById('card2').addEventListener('click' ,function (eventObj) { //So this is the eventObj 
        console.log(eventObj);//So this object contain all the details of event like
        //Timestamp , cursor position etc and many more...

     //some of the important events objects are..
     
     //type -- like keyboard ,timeStamp ,defaultPrevented
     //target ,toElement ,srcElement ,currentTarget
     //clientX ,clientY ,screenX ,screenY
     //altKey ,ctrlKey,shiftKey ,keyCode
    });

//Now event Propogation which is that above true and false statement....

//event propogation has two part 
//1 .Event Bubbling and
//2 . Event Capturing
 //normally we use false that is Event Bubbling....

 //Lets take an example to understand this....

 //
 document.getElementById('main').addEventListener('click',function (e) {
    console.log('Clicked inside div Main'); 
    // output Clicked inside div Main
 },false)

 document.getElementById('card3').addEventListener('click',function (e) {
    console.log('Clicked inside Card 3');
    //output Clicked inside Card 3
        //   Clicked inside div Main
 } ,false)
 
 
 //Okay so in this example we can see that at first when i clicked inside the div it will give me the normal output as expected...
 //but when i click on card 3 i get the div output and a card output also..
 //so there at first the card output has been printed and after that the div output..
 //it happens because of bubble event propogation in which it will expand from inside to outside or small lo large like a bubble..
 
 //Which means it gies to bottom to top..

 //example of capturing propogation True

 document.getElementById('main').addEventListener('click',function (e) {
    console.log('Clicked inside div Main'); 
    //output Clicked inside div Main
 },true)

 document.getElementById('card3').addEventListener('click',function (e) {
    console.log('Clicked inside Card 3');
    // output         Clicked inside div Main
            // Clicked inside Card 3
 } ,true)

 //here everything remains same at top but..
//  at second it will give me the outer div value then only it gaves me card value
//It is because the caputer propogation moves from Top to bottom... 

//here both of this is correct this is used as per the requirment...
//Normally we will use bubble propogation...

//there is a method to prevent this propogation by using 
// stop propogation method

// like

document.getElementById('card3').addEventListener('click',function (e) {
    console.log('Clicked inside Card 3');
    e.stopPropagation(); //Now it will prevent the propogation of bubblng or moving from top to bottom or bottom to top
    // output         Clicked inside div Main
            // Clicked inside Card 3
 } ,true)

 //Now lets talked about prevent default method.. 
 //Card 4 has a google link if I click there it will redirect me to google page but I dont want that so i will do

 document.getElementById('card4').addEventListener('click' , function (e){
    e.preventDefault() //SO now this event e will prevent me from accessing that google page..

    // console.log("Google page Card has been Clicked");
   e.stopPropagation() //Removing propogarion
 } ,false)

 //Now removing parent Node using Event..
 //If I want to remove any card when I click on it then i can use remove()

 document.getElementById('main').addEventListener('click' ,function(event) {

    // console.log(event); //This will give me the event of the element.
    // console.log(event.target.tagName);
    const removeIt = event.target.parentNode;
    //  removeIt.remove(); //This will remove the parent node element

    //Or we can do this also

    // removeIt.parentNode.removeChild(removeIt); //so we can use this also to remove but it is a bit confusing..
//But here we face a problem that I want to remove just a one card but when i click it every parent node div will get remove so to fix it we can do..



    
 });

 //To fix that problem we can target the tagName and we can execute through passing condition...

 //Thats it for the Events ..//

 //Happy Coding