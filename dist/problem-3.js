"use strict";
const arrayOfString = ['Rahim', 'Karim', 'Abul', 'Kabul', 'Babul'];
const reverseArrayOfStringFunction = (...arrayOfString) => {
    return arrayOfString.reverse();
};
console.log(reverseArrayOfStringFunction(...arrayOfString));
