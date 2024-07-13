//Filter is method which returns the value only if it is true

// .... and we can used to hold that value on any variable which is not possible in for each loop 




//example

const arr =["apple" ,"mango" ,"Guava" ,"Papaya"]

const newArr =arr.forEach( (print) => {
    console.log(print);
})

console.log(newArr); //Here it will give me undefine which means the arr value is not getting return into the myArr variable..



//For this we will use filter method..


const arr2 =["apple" ,"mango" ,"Guava" ,"Papaya"];


const myNewArr = arr2.filter( (num) =>  num ); //This will return the num value to myArr and here I am not using return keyowrd because i have write in a same line....//This concept is already covered in function file

console.log(myNewArr);


//And if I use {} then i have to return it

const myNewArr2 = arr2.filter ( (print) =>{
      return print; //Here i have to use return to return the value
})
console.log(myNewArr);



//Lets try with number also


const myNums =[2,4,3,5,3,2,5,7,4,3,4,7,9,6,4];

const newNums =myNums.filter( (nums) => nums>4 ) //Here if numbers which are greater than 4 will be returned into newNums
 console.log(newNums);//Numbers greater than 4 will only print..


 //Lets try with return method manually
 
const hold =[];
 const num1 =[2,4,5,3,2,5,7,4,3,2,5,7,9,6,4,3,20,30,39]

 const number =num1.filter( (num2) => {

        if(num2 >4){
            hold.push(num2);
        }
 })
 console.log(hold); //This is wild become to complex...



 //Lets try one more example...


 const cars = [
    {
      name: "Toyota Camry",
      publishDate: 2005,
      color: "Red",
      price: 30000,
      power: "203 hp",
      mileage: "25 mpg",
      transmission: "Automatic",
      fuelType: "Petrol",
      seatingCapacity: 5
    },
    {
      name: "Honda Accord",
      publishDate: 1999,
      color: "Blue",
      price: 28000,
      power: "192 hp",
      mileage: "26 mpg",
      transmission: "Automatic",
      fuelType: "Diesel",
      seatingCapacity: 5
    },
    {
      name: "Ford Mustang",
      publishDate: 2007,
      color: "Black",
      price: 45000,
      power: "450 hp",
      mileage: "18 mpg",
      transmission: "Manual",
      fuelType: "Diesel",
      seatingCapacity: 4
    },
    {
      name: "Chevrolet Malibu",
      publishDate: 2001,
      color: "White",
      price: 25000,
      power: "160 hp",
      mileage: "24 mpg",
      transmission: "Automatic",
      fuelType: "CNC",
      seatingCapacity: 5
    },
    {
      name: "Nissan Altima",
      publishDate: 2008,
      color: "Silver",
      price: 27000,
      power: "188 hp",
      mileage: "27 mpg",
      transmission: "Automatic",
      fuelType: "CNC",
      seatingCapacity: 5
    },
    {
      name: "Tesla Model 3",
      publishDate: 2010,
      color: "Grey",
      price: 50000,
      power: "283 hp",
      mileage: "Electric",
      transmission: "Automatic",
      fuelType: "Electric",
      seatingCapacity: 5
    },
    {
      name: "BMW 3 Series",
      publishDate: 2003,
      color: "Blue",
      price: 41000,
      power: "255 hp",
      mileage: "23 mpg",
      transmission: "Automatic",
      fuelType: "Electric",
      seatingCapacity: 5
    },
    {
      name: "Audi A4",
      publishDate: 2009,
      color: "Black",
      price: 42000,
      power: "261 hp",
      mileage: "24 mpg",
      transmission: "Automatic",
      fuelType: "Gasoline",
      seatingCapacity: 5
    }
  ];
  
 //Now lets try to use filter here and lets make some filter...

   const carsDetails = cars.filter( (showcars) => showcars.color==="Red" || showcars.color ==="Blue");

   console.log(carsDetails);
   //Or if i want more specific then I can do

   const carsDetails2 = cars.filter( (showcars) => {
        return showcars.color="Red" || showcars.price >=2000 || showcars.power >200;
   })
console.log("The Details of car is", carsDetails2);

const carDetails3 =cars.filter((print) => print.fuelType ==="Electric" && print.color==="Red" );
console.log(carDetails3)
  
//Thats it Easy Right....

//Happy Coding....