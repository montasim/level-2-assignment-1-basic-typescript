"use strict";
const people = [
    {
        name: 'Rahim Mia',
        age: 10
    },
    {
        name: 'Karim Mia',
        age: 20
    },
    {
        name: 'Abul Mia',
        age: 18
    },
    {
        name: 'Kabul Mia',
        age: 28
    }
];
const adultObjectFunction = (arrayOfObject) => {
    return arrayOfObject.filter(person => person.age >= 18);
};
console.log(adultObjectFunction(people));
