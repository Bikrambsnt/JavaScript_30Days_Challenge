const main = document.querySelector('#main');
const cursor =document.querySelector('.cursor')

main.addEventListener('mousemove' ,(e) =>{
    // console.log(e);
        // console.log(`X is ${e.clientX}`);
        // console.log(`Y is ${e.clientY+ 'px'}`)
        cursor.style.left = e.clientX+'px' //px is added to define the pixel that the cursor will move
        cursor.style.top =e.clientY+'px';  
        
        
  

    
});

//Thats it...
//Easy right.


