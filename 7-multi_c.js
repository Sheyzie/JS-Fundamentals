// process.argv property returns an array containing the command-line arguments
const { argv } = require('node:process');

const myNumber = parseInt(argv[2])

if (isNaN(myNumber)) {
    console.log('Missing number of occurrences')
} else {
    for (let i = 0; i < myNumber; i++) {
        console.log('C is fun')
    }
}