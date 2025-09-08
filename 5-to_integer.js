// process.argv property returns an array containing the command-line arguments
const { argv } = require('node:process');

const myNumber = parseInt(argv[2])

if (isNaN(myNumber)) {
    console.log('Not a number')
} else {
    console.log('My number: ' + myNumber)
}
