"use strict";
const consoleLogFunction = (parameter) => {
    if (typeof parameter === 'string') {
        return console.log(parameter);
    }
    else {
        return console.error('Error: Provided parameter is not a string');
    }
};
consoleLogFunction('Hello world');
consoleLogFunction(10);
