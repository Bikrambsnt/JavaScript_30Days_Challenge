//String can be declare on two types 

let Str = "This is a string"

// another type is using new key

let Str2 = new String('This is a string')

console.log(Str);
console.log(Str2);

//Add two string

 let str1 ="Bikram";

 let str2 ="Basnett";
 let ans =(str1 + str2);
 console.log(ans);
 //But its not a good way the best way is to do 

 console.log(`${str1} ${str2}`);//

 //Now the strings has many functions or optons like trim,slice,length. to access it use .

 let Str3 ="Bikram";

 console.log(Str3.toUpperCase());

 console.log(Str3.slice(0 ,3));

 let Str4 ="Bikram      "
 console.log(Str4);
 console.log(Str4.trim());
 console.log(Str4.isWellFormed())
 console.log(Str4.charAt(4));