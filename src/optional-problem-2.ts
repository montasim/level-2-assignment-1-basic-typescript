// part 1
type AlphaNumericType<T> = T extends string ? string : number;

// part 2
interface PersonInterface {
  name: string;
  age: AlphaNumericType<any>;
}

const man: PersonInterface = {
  name: 'Rahim',
  age: 20,
};

// part 3
console.log(man);
