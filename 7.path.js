// require path module
const path = require('path')

console.log(path.sep)


// filepath
const filePath  = path.join('/pro02', 'test.txt')
console.log(filePath)


// basepath
const basePath = path.basename(filePath)
console.log(basePath)


// absolute path
const absolutePath = path.resolve(__dirname, '/pro02','test.txt')
console.log(absolutePath)
