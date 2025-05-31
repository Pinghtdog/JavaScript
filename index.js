 console.log("Hello");
 let x;
 console.log(x);
 x = "World";
 console.log("Hellow " + x);
 

 //typeoff
 //Ctrl + L = clear console

 let person = {
    name: 'Kelvin',
    age: 20
 };

 console.log(person);
 // Dot Notation
 console.log(person.age + " " + person.name );
 // Bracket Notation - has to be "name" not [name] only
 person["name"] = "Joshua";
 //Dot Notation
 person.age = 32;
 
 console.log(person.age + " " + person.name );

//Function
 function greet(name){
    console.log('Hello ' + name);
 }// no ";"

 greet("Kelvin");