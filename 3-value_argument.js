// process.argv property returns an array containing the command-line arguments
const { argv } = require('node:process');

if (!argv[2]){
    console.log('No argument')
} else {
    console.log(argv[2])
}