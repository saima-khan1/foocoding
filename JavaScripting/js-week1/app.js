// 1. Hello World in different languages
console.log('Hello World'); //English
console.log('Hej Verden'); //danish
console.log('Hej varlden'); //swedish

//2. solution for error
console.log(`I'm awesome`);

//3. declare and initialize the variable x with value
let x;
console.log('the value of x will be: undefined');
console.log(x);
x = 17; //assign value to x
console.log('the value of  x will be: 17');
console.log(x); //log value

//4.declare and initialize the variable y and assign string
let y = 'front-end'; //value of string
console.log('the value of string is : front-end');
console.log(y);
y = 'back-end'; //new value of string
console.log('the value of string is : back-end');
console.log(y);

//5.How do you round the number 7.25, to the nearest integer (i.e., whole number)?
//5.1 Declare a variable z and assign the number 7.25 to it.
const z = 7.25;
console.log(z);
//5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
const a = Math.round(z);
console.log(a);
// 5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
// 5.6 console.log the highest value.
const highestValue = Math.max(z, a);
console.log('Highest value among z & a is :', highestValue);

//6. Arrays
//6.1 Declare an empty array.
const names = [];
console.log(names, 'this is a empty array');

//create an arrray with fav animals
const favAnimals = ['cat', 'dog', 'tortise'];
console.log('My fav animals are :', favAnimals);

//adding daan's fav animal to favAnimals array
favAnimals.push('baby pig');
console.log('My new fav animals are:', favAnimals);

// 7 More strings
//console.log myString  variable
let myString = 'this is a test';
console.log(myString);
// Display the lenght of myString
console.log('length of myString is:', myString.length);

//8. Declare diff types of data types
//string datatype
let myName = 'Ana';
console.log('value of variable name is: ' + myName);
console.log('the type of varibale name is: string');
console.log(typeof myName);

//Number datatype
let age = 18;
console.log('value of variable age is: ' + age);
console.log('the type of varibale age is: Number');
console.log(typeof age);

//Boolean datatype
let isAdult = true;
console.log('value of variable isAdult is: ' + isAdult);
console.log('the type of varibale isAdult is: boolean');
console.log(typeof isAdult);

//Undefined datatype
let address;
console.log('value of variable address is: ' + address);
console.log('the type of varibale address is: undefined');
console.log(typeof address);

//function to compare the data types for all the variables
function compareDataTypes(variable1, variable2) {
  let dataType1 = typeof variable1;
  let dataType2 = typeof variable2;
  if (dataType1 === dataType2) {
    return 'SAME TYPE';
  } else {
    return 'DIFFERENT TYPES';
  }
}
console.log('myName and age variables have', compareDataTypes(myName, age));
console.log(
  'myName and isAdult variables have',
  compareDataTypes(myName, isAdult)
);
console.log(
  'myName and address variables have',
  compareDataTypes(myName, address)
);
console.log('age and isAdult variables have', compareDataTypes(age, isAdult));
console.log('age and address variables have', compareDataTypes(age, address));
console.log(
  'address and isAdult variables have',
  compareDataTypes(address, isAdult)
);

//9. explain the % (remainder/ modulo) operator
let r = 7;
console.log('value of r is:', r);

//now do the  r = r % 3 and define the new value for r
r = r % 3;
console.log('New value of the r is:', r);
console.log(
  '% remainder/ modulo operator returns the remainder left over when one operand is divided by a second operand.'
);

//10. Array
//10.1 create array with different data types Number & string
let mixArray = ['one', 1, 'two', 2];
console.log('array with different datatypes strings and numbers', mixArray);
console.log(
  'printing only strings datatypes elements from the array: ',
  mixArray[0],
  mixArray[2]
);
console.log(
  'printing only numbers datatypes elements from the array: ',
  mixArray[1],
  mixArray[3]
);
//10.2 compare infinities
console.log('Yes, infinite are comprable refer the below example');
console.log(
  'infinite are comparable using comparison opreator  for ex: (6/0 === 10/0) returns:',
  6 / 0 === 10 / 0
);
