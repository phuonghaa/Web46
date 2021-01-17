const isOdd = require('is-odd')
const fs = require('fs')

const data = fs.readFileSync('text.txt').toString().split(" ").map(num => parseInt(num))




const data = fs.readFileSync('text.txt').toString().split(" ")
console.log(data);

for (const num of data) {
    if(isOdd(parseInt(num))) console.log(num);
}