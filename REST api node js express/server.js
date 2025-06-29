// // Inter Conversion JSON to an Object in Node.js

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString);  // convert JSON string to object
// console.log(jsonObject.name);  // output: John

// ............................................................................................

// const objectToConvert = {
//     name: 'Alice',
//     age: 25
// };
// const json = JSON.stringify(objectToConvert);  // convert object to JSON string
// console.log(json);  // output: {'name': 'Alice', 'age': 25}
// console.log(typeof json);  // string

// ............................................................................................

import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to my hotel... How i can help you ?');
})

app.get('/chicken', (req, res)=>{
    res.send('sure sir, i would love to serve chicken');
})

app.get('/idli', (req, res) => {
    var customized_idli = {
        name: 'tamim idli',
        size: '10 cm diameter',
        is_sambhar: true,
        is_chutney: false
    }
    res.send(customized_idli);
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})