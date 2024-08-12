

//In closure we can able to access the child from outside..

//We will simply return the child to the global context
//While returning chlild remember that only that child will not get return it will return everything which is connected to it through lexical scope,


//example

function outer(){
    let name = 'Outer'

    function inner(){
        console.log(name);

    }

    //Now here we will return inner function but while returning it will return outer function also due to leical scope

    return inner;
}


//Now I can access that above function from here outside the function scope which is not possible in lexical scope


const showFunc = outer();

showFunc();//

//lets try another one...

function outerMe (){
    let outerName = 'Outer me'

    function innerOne(){
   
        console.log(outerName)
        
    }

 
    return innerOne;
    

}

const displayAll = outerMe();
displayAll()