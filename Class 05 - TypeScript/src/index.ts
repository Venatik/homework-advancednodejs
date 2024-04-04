// Exercise1:

function love(flower1: number, flower2: number): boolean {
  return flower1 % 2 !== flower2 % 2;
}

console.log(love(1, 4));
console.log(love(2, 2));

// Exercise2:
interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}

let peopleArray: Person[] = [
  { name: "Stefan", age: 35, gender: "male" },
  { name: "Bobo", age: 34, gender: "male" },
  { name: "Jane", age: 25, gender: "female" },
];

function filterByProperty(people: Person[], property: string, value: string) {
  return people.filter(person => person[property as keyof Person] == value);
  // samo person[property] ne rabotese, googlav do resenie i stignav do ova
}

console.log(filterByProperty(peopleArray, "gender", "male"));
console.log(filterByProperty(peopleArray, "age", "35"));
console.log(filterByProperty(peopleArray, "name", "Jane"));

// Exercise3:
function doubleValue(array: number[]): number[] {
  return array.map(value => value * 2);
}

let array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
console.log(doubleValue(array));

// Exercise4:
function toString(boolean: boolean): string {
  return boolean.toString();
}

console.log(toString(true));
console.log(toString(false));

// Exercise5:
function calcAverage(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

console.log(calcAverage(array));

// Exercise6:
let testArray = [96, 87, 94, 82, 76];
let myScore = 90;

function isHigher(array: number[], score: number): boolean {
  array.push(score);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let average = sum / array.length;
  return score > average;
}

console.log(isHigher(testArray, myScore));

// Exercise7:
let array2 = [0, 2, 5, 8, 10, 15, 20, -60, -50, -22];

function countAndSum(input: number[] | null): number[] {
  if (input === null || input.length === 0) {
    return [];
  }
  let count = 0;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    } else if (input[i] < 0) {
      sum += input[i];
    }
  }
  return [count, sum];
}

console.log(countAndSum(array2));

// Exercise8:
function evenOrOdd(number: number): string {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(11));

// Exercise9:
interface CalcInterface {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number;
}

class Calculator implements CalcInterface {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 2));
console.log(calc.subtract(123123, 5421));
console.log(calc.multiply(5, 5));
console.log(calc.divide(10, 2));
