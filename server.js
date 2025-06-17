console.log("hello TheTechHub")
//global object instaed of window object
console.log(global);
//commonjs modules instead of ES6 modules
const os = require('os');
//get some information
//common core module import it is path it is also module
//missing some js APIs like fetch ,we can pull and post 


const path = require('path')
const {add,sub,multipy,divide} =require('./math')
console.log(add(2,3))
console.log(sub(2,3))
console.log(multipy(2,3))
console.log(divide(2,3))

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())


// //access to  node 
// console.log(__dirname)
// console.log(__filename)
// //filename in path
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))