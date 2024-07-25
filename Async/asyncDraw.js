//Code example of acync


console.log(1);

setTimeout (() =>{
    console.log(2)
},1);

console.log(2);

//Output will be 
// 1
// 3
// 2

//Three will be executed after 1 because 2 will be sended into register call back and it will wait for the timeout
//till that wait another process will be held and that will print 3 and after that 2


//The explanation is available in this link

src ="https://excalidraw.com/#json=O-pNXdLKfvIFUMPzTGH9C,7sbf9-557nIuoKdkrxTCgg";