const arrayOfString: string[] = ['Rahim', 'Karim', 'Abul', 'Kabul', 'Babul'];

const reverseArrayOfStringFunction = <T>(...arrayOfString: T[]): T[] => {
  return arrayOfString.reverse();
};

console.log(reverseArrayOfStringFunction(...arrayOfString));
