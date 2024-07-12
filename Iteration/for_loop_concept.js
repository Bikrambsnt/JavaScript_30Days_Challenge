//Loop in js ......


     
       //syntax 
    //  for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    //    }

  
  for(let i =0 ; i<=15; i++){ //this will print from 0 to 14  if i want 15 then i will use = operator
    const element = i;

    console.log(element);
  }
  //easy...

  //nested loop

for(i =0; i<=12; i++){
    console.log(`Its a Outer loop ${i}`);
    for(j=0; j<=12; j++){ // here i cant use i again because of scope ....

        // console.log(`Its a inner loop ${j} and outer loop is ${i}` );

        console.log(`${i} * ${j} = ${i*j}`); //I have print the multiply using the both loop easy..
    }
}

//if statement inside loop

for (i=1; i<=10; i++){
 
    if(i==4){
        console.log(`That my favourite number ${i}`);
    }
    console.log(i);

}//

//Array on loop

let myArr =["apple" ,"Banana" ,"Guava" ,"Pineapple"];
console.log(myArr.length);
for(i =0; i <myArr.length; i++){ //here why i havent use == bcz array start from 0 index so on 0 index we got apple 
    console.log(myArr[i]);
}


//Break and continue on loops

//Break it will break the loop or stop the after the condition meet
//Continue it will skip that match condition and keep the loop continue...


for(let a=1; a<=30; a++){
    if(a===10){
        console.log("A meet the condition that is 10"); //Now when loop reach the 10 value then the loop will be stop and we will get only value till 10
        break;
       
    }
    console.log(`The loop value is ${a}`);//Print till only 10 bcz of break statement///
}

//continue...

for(let a=1; a<=20; a++){
    if(a==5){
        console.log(`${a} has been detected`); //here it will skip 5 and loop goes on
        continue;
    }
    console.log(`The value of loop is ${a}`); //only 5 will not get print because its been skipped bcz of continue..
}