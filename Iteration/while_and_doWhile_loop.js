//Wile loop is also same as other loop but in this only condition willpass ..


//syntax
//while (condition) {}

//example

let i =1; //always use let in while loop const will create a problem while incrementing inside scope...
while (i<=10) {
    console.log(`The value of i is ${i}`);
        i++;
    
}


//array with while loop

        let myArr =[3,5,6,"apple" , 4,3,5];
        let arr=0;

        while (arr<myArr.length) {

            console.log( `The array is ${myArr[arr]}`);
            arr ++;
            
        }//Easy right....

        //Do while loop


        // syntax
        // do {
            
        // } while (condition);
        //Im this first code will get executed then the condition will get checked......

        let j=1;

        do {
             console.log(  `The value of j is ${j}`);
             j++; 
        } while (j<=10);
        //Easy right...

        //thats all about while and do while loop...

        //happy coding....