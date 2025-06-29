// console.log('server file is running');  // server file is running

// ............................................................................................

// function add(a, b) {
//     return a + b;
// }

// var result = add(2, 7);
// console.log(result);  // 5

// ............................................................................................

// var add = function(a, b) {
//     return a + b;
// }

// var result = add(2, 8);
// console.log(result);

// ............................................................................................

// var add = (a, b) => {return a + b}

// var add = (a, b) => a + b;

// var result = add(124, 8);
// console.log(result);

// ............................................................................................

// (function() {
//     console.log('tamim is added');
// })();

// ............................................................................................

// function callback() {
//     console.log('tamim is calling a callback');
// }

// const add = function(a, b, callback) {
//     var result = a + b;
//     console.log('result: ' + result);
//     callback();
// }

// add(3, 4, callback);

// ............................................................................................

// const add = function(a, b, tamim) {
//     var result = a + b;
//     console.log('result: ' + result);
//     tamim();
// }

// add(2, 3, function() {
//     console.log('add completed');
// })

// ............................................................................................

// const add = function(a, b, tamim) {
//     var result = a + b;
//     console.log('result: ' + result);
//     tamim();
// }

// add(2, 3, () => console.log('add completed'));

// ............................................................................................

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', ()=> {
//     console.log('file is created');
// })

// console.log(fs);
// console.log(os);

// ............................................................................................

// const notes = require('./notes.js');
// console.log('server file is available');

// var age = notes.age;
// var result = notes.addNumber(age+18, 10);
// console.log(age);
// console.log('result is now ' + result);

// ............................................................................................

var _= require("lodash");

var data = ['person', 'person', 1, 2, 1, 2, 'name', 'age', '2'];
var filter = _.uniq(data);
console.log(filter);

console.log(_.isString('tamim'));  // true
console.log(_.isString(3));  // false
console.log(_.isString(false));  // false
console.log(_.isString(true));  // false