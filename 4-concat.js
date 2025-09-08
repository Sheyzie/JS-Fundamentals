// process.argv property returns an array containing the command-line arguments
const { argv } = require('node:process');

console.log(argv[2] + ' is ' + argv[3])