var fs = require('fs')

/*
//readFilesync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');  //동기적으로 처리
console.log(result);
console.log('C');
*/

console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function (err, result) {
    console.log(result);
}); //비동기적으로 처리 

console.log('C');