// console.log(module);

// module.exports.person = {name: "hung", test: 'a'}
// module.exports.person1 = {name: "hung1", test: 'a2'}
// console.log(module);
// function test(){
//     console.log("a");
// }
// test()
// console.log(module);

// const fs = require('fs')

const {readFileSync,writeFileSync} = require('fs')

const text = readFileSync('./test_1.txt', 'utf8')
console.log(text);
writeFileSync('./something.txt', `Test returned here ${3}`, {flag: ""})
