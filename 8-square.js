// process.argv property returns an array containing the command-line arguments
const { argv } = require('node:process');

const squareSize = parseInt(argv[2])

if (isNaN(squareSize)) {
    console.log('Missing size')
} else {
    let square = 'X'
    for (let i = 1; i < squareSize; i++) {
        square += 'X'
    }

    for (let i = 0; i < squareSize; i++) {
        console.log(square)
    }
}