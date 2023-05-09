class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getDetails(): void {
    return console.log(`${this.name} ${this.age}`);
  }
}

class Student extends Person {
  private grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  public getGrade(): void {
    return console.log(this.grade);
  }
}

const person1 = new Person('Rahim Mia', 20);
const student1 = new Student('Karim Mia', 18, 'A+');

person1.getDetails();
student1.getGrade();
