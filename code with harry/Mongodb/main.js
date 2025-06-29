const cars = ['Saab', 'Volvo', 'BMW'];
cars.push('tesla');
// console.log(cars);  // [ 'Saab', 'Volvo', 'BMW', 'tesla' ]

// console.log(cars[2]);  // BMW
// console.log(cars[0]);  // Saab

// ............................................................................................

let hour = 16;

if(hour < 12) {
    // console.log('we are not allowed');
} else {
    // console.log('we are allowed');
}

// output : we are allowed

// ............................................................................................
const person = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'swimming', 'painting']
};

// console.log(person);
// console.log(person.age);  // 30
// console.log(person.hobbies);  // [ 'reading', 'swimming', 'painting' ]
// console.log(person.isStudent);  // false

// output:
// {
//   name: 'John Doe',
//   age: 30,
//   isStudent: false,
//   hobbies: [ 'reading', 'swimming', 'painting' ]
// }

// ............................................................................................
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAge);

function checkAge(age) {
    return age <= 18;
}

// console.log(result);  // 16

// ............................................................................................

var prompt = require('prompt-sync')();
const age = prompt("Please enter your age : ");

if(age < 18) {
    console.log('you get a 20% discount');
} else {
    console.log('You get a 30% senior discount');
}