"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return console.log(`${this.name} ${this.age}`);
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getGrade() {
        return console.log(this.grade);
    }
}
const person1 = new Person('Rahim Mia', 20);
const student1 = new Student('Karim Mia', 18, 'A+');
person1.getDetails();
student1.getGrade();
