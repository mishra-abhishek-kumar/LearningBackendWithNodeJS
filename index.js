//Different ways to import in NodeJs
const {multiply, log} = require('./utils');
const utils = require('./utils');

console.log(multiply(2, 3));
console.log(utils.multiply(3, 4));

utils.log.error("this is just an info");
log.warning("this is just an info");