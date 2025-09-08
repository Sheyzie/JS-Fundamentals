// process.argv property returns an array containing the command-line arguments
const { argv } = require('node:process');

function add(a, b) {
    return a + b
}

console.log(add(parseInt(argv[2]), parseInt(argv[3])))