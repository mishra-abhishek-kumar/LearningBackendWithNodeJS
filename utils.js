//Exporting function
const multiply = (a, b) => {
    return a*b;
}

//Exporting Object
const log = {
    warning: (info) => {
        console.log('warning:', info);
    },
    error: (info) => {
        console.log('error:', info);
    }
}


//Different ways to export module

//1st method
module.exports = {multiply, log};

