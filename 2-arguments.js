// process.argv property returns an array containing the command-line arguments
const { argv } = require('node:process');

if (argv.length < 3) {
    console.log('No argument')
} else if (argv.length === 3){
    console.log('Argument found')
} else {
    console.log('Arguments found')
}