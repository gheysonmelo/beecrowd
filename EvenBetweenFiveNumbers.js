var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines[0]);
var B = parseInt(lines[1]);
var C = parseInt(lines[2]);
var D = parseInt(lines[3]);
var E = parseInt(lines[4]);
var arr = [A, B, C, D, E];
var q = 0;

for (var i = 0; i < arr.length; i++) {
    if ((lines[i] % 2) === 0) {
        q++;
    }
};

console.log(`${q} valores pares`);