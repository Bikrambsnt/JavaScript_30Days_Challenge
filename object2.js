const anObj =new Object();
 anObj.name="I am Object",
 anObj.id="124",
 anObj.use="Lots of use";
 //console.log(anObj);//acccessinng object

//Now lets create object inside an object //Nested object

const livingOrg ={
     species:"Human",
     identified:1000,
     person:{
        gender:"male",
        height:20,
        identify:{
            name:{
                firstName:"Bikram",
                lastName:"Basnett",
                age:22,
                
            }
        }
     }


}
//Accessing this nested object
console.log(livingOrg.person.identify.name.firstName);
