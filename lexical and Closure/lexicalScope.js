
  //Lexical scope is about the scope declaration or scope access..

  //This is mainly talked about how scope works on function 

  //example..

  function outer(){
    let userName ='Bikram';
    //inside this I will declare another function

    function inner(){
        //now here I can access that parent function values like
        let name = 'child'
        console.log(userName);

    }


    inner()

    //Neither I can able to access that here
    // console.log(name);


  }
  outer()
  //But I cannot access that inner Function value outside its scope 
//   console.log(name);

//That simple right>>

//Now lets add more function


function outside (){
    let userName ="Outsider"

    function insideOne(){
        let nameOne = 'Inside me'
        //Now I can access the parent function here

        console.log(userName)

    }
    insideOne();

    function insideTwo(){
        let nameTwo = 'anotherInsideMe'
        //I can acess parent here also
        console.log(userName);

        //But I  cannot aceess first child function value here

        // console.log(nameOne);

    }
    insideTwo();

    //Neither I can access it here

    // console.log(nameOne);
}
// Neither here
// console.log(nameOne)

outside();

//SO this is lexical scope

// {parent

//     {parent access}

//     no child access

//     {parent access}
//     no child access

// }
// no child access
// Thats the funda...



//Happy coding