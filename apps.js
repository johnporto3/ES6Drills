//Template Literals and Default Parameters Value

//1, 2, 3, 4
//function favMovie(movie)  {
//    console.log(`My favorite movie is ${movie}.`);
//}

//favMovie();

//4 I get My favorite movie is undefined


//5 - updated the parameter to have a default value of "the room"
//function favMovie(movie = 'The Room')  {
//    console.log(`My favorite movie is ${movie}.`);
//}

//favMovie();

// 6&7 I get the message and the parameter is "The Room"

//8&9  

//function favMovie(name = 'world', movie = 'The Room')  {
//    console.log(`My name is ${name} and my favorite movie is ${movie}.`);
//}

//favMovie('John', 'Gladiator');

//11 Yes, I get the defaults when I pass nothing and when I pass it with values of John and my favorite movie, I get the correct values in console.

//Arrow Functions

//1 


//let favMovie = (name = 'world', movie = 'The Room') =>  
//console.log(`My name is ${name} and my favorite movie is ${movie}.`);
    
//2&3 Message is still logged in console.
    
//favMovie();
    
//4  I get the correct message in console with no errors
//let favMovie = (name = 'world', movie = 'The Room') => console.log(`My name is ${name} and my favorite movie is ${movie}.`);

//favMovie();

//5 create a new arrow function






//let getFirstName = 'John'; () => {
//    console.log(getFirstName);
//}

//}
//let name = getFirstName.split(" ",1); => console.log(name)


//Spread Syntax
//1, 2, 3, 4 - In console, I get the sentence: My name is John, I live in the OC and my favorite food is pizza.

let yum = (name, location, favFood) => console.log(`My name is ${name}, I live in ${location} and my favorite food is ${favFood}.`);

let values = ['John', 'The OC', 'pizza'];

yum(...values);


//