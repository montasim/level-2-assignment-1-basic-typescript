"use strict";
const logFunction = (logMessage, logRepetition = 3) => {
    for (let i = 1; i <= logRepetition; i++) {
        console.log(logMessage);
    }
};
logFunction('Hello world', 5);
logFunction('Testing log function');
