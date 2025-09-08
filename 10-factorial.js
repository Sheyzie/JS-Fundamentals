// process.argv property returns an array containing the command-line arguments
const { argv } = require('node:process');

const num = parseInt(argv[2])

function factorial(num) {
    if (isNaN(num) || num === 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(num))