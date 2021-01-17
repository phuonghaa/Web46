console.log("hello");

const isOdd = require('is-odd') //require thu vien => tim trong node_module  (2)
const myIsOdd = require('./isOdd') //require node tu viet (3)
const fs = require('fs') //require node co san nodejs (1)

fs.writeFile('text.txt', 'Hello web 46', (err) => {
    if (err) return console.log('Error', err);
    console.log("Sucess");

    fs.readFile('./text.txt','utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
})



// console.log(isOdd(5));
// console.log(`minee`, myIsOdd(5));


const data = fs.readFileSync('text.txt').toString()
console.log(data)
console.log("done");

