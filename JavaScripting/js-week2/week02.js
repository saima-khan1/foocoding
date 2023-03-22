//1. log the string and remove commos
let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString); //log string
console.log(myString.length); //log length of string
const parts = myString.replaceAll(',', '  '); //remove the commas from the string and replace them with spaces
console.log(parts);

//2.adding new string to array
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);
favoriteAnimals.push('turtle'); //adding  Mauro's favorite animal 'turtle' to the existing array.
console.log('Adding mauros fav animal turtle ');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat'); //add 'meerkat' placed after 'blowfish' and before 'capricorn'
console.log('the new value of array is:meerkat');
console.log(favoriteAnimals);
console.log('The array has a length of:5 ');
console.log(favoriteAnimals.length);
favoriteAnimals.splice(3, 1); // removing giraffe from the array
console.log(favoriteAnimals);
console.log(favoriteAnimals.indexOf('meerkat')); //index of meerkat
console.log('The item which we are looking for is at index: 4');

// MORE JAVASCRIPT
// 1. function that takes 3 arguments and returns the sum of the these arguments
function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3));

// 2. create a function colorCar
function colorCar(color) {
  let colorCar = `a ${color} car`;
  return colorCar;
}
console.log(colorCar('red'));

// 3.Create an object and a function that takes the object as a parameter and prints out all of its properties and values

let address = createAddress('a', 'b', 'c');
console.log(address);
function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
  };
}

//4.Create a function named vehicleType
function vehicleType(color, code) {
  if (code == 1) {
    console.log(`a ${color} car`);
  }
  if (code == 2) {
    console.log(`a ${color} motorbike`);
  }
}
vehicleType('blue', 2);

// 5. single line code

3 === 3 ? console.log('yes') : console.log('no');

// 6.
function vehicle(color, code, age) {
  let vehicleAge = age > 1 ? 'used' : 'new';
  if (code == 1) {
    console.log(`a ${color} ${vehicleAge} car`);
  }
  if (code == 2) {
    console.log(`a ${color} ${vehicleAge} motorbike`);
  }
}
vehicle('blue', 1, 5);

//7. Make a list of vehicles, you can add "motorbike", "caravan", "bike"
let listOFvehicle = ['motorbike', 'caravan', 'bike'];
const thirdElement = listOFvehicle.splice(2, 1);
console.log(thirdElement);

//9 .Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle(color, code, age) {
  let vehicleAge = age > 1 ? 'used' : 'new';
  if (code == 1) {
    console.log(`a ${color} ${vehicleAge} car`);
  }
  if (code == 2) {
    console.log(`a ${color} ${vehicleAge} motorbike`);
  }
  if (code == 3) {
    console.log(`a ${color} ${vehicleAge} ${thirdElement}`);
  }
}
vehicle('green', 3, 1);

//10.
function generateAdvertisement(listOFvehicle) {
  let advertisement = "Amazing Joe's Garage, we service ";

  for (let i = 0; i < listOFvehicle.length; i++) {
    advertisement += listOFvehicle[i];

    if (i === listOFvehicle.length - 1) {
      advertisement += '.';
    } else if (i === listOFvehicle.length - 2) {
      advertisement += ' and ';
    } else {
      advertisement += ', ';
    }
  }

  return advertisement;
}
listOFvehicle.push('bike');

console.log(generateAdvertisement(listOFvehicle));

// adding new vehicle to list
listOFvehicle.push('truck');
console.log(generateAdvertisement(listOFvehicle));

// 12. Create an empty object

let obj = {};
console.log(obj);

//13. Create an object that contains the teachers that you have had so far for the different modules.

let teachers = {
  Tommy: '',
  Sahin: '',
};
teachers['Tommy'] = 'HTML, CSS';
teachers['Sahin'] = 'JavaScript';

console.log(teachers);

//
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

//16.
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log('value of o3 before changin o2 value', o3);
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
o2 = { foo: 'changed-02' };
console.log('new value of o2', o2);
console.log(
  'value of o3 after changin o2 value',
  o3,
  'the value of o3 is not changed'
);
o1 = { foo: 'changed-01' };
console.log('new value of o1', o1);
console.log(
  'value of o3 after changin o1 value',
  o3,
  'the value of o3 is not changed'
);

//17.
let bar = 42;
console.log('"let bar = 42", then what "typeof typeof bar" will return');
console.log(
  'typeof operator always returns a string indicating the type of its operand. In this case, the operand is the string "number", so the result is',
  typeof typeof bar
);
