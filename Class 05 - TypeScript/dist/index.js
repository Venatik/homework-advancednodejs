"use strict";
// Exercise1:
function love(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}
console.log(love(1, 4));
console.log(love(2, 2));
let peopleArray = [
    { name: "Stefan", age: 35, gender: "male" },
    { name: "Bobo", age: 34, gender: "male" },
    { name: "Jane", age: 25, gender: "female" },
];
function filterByProperty(people, property, value) {
    return people.filter(person => person[property] == value);
    // samo person[property] ne rabotese, stignav do ova resenie
}
console.log(filterByProperty(peopleArray, "gender", "male"));
console.log(filterByProperty(peopleArray, "age", "35"));
console.log(filterByProperty(peopleArray, "name", "Jane"));
// Exercise3:
function doubleValue(array) {
    return array.map(value => value * 2);
}
let array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
console.log(doubleValue(array));
// Exercise4:
function toString(boolean) {
    return boolean.toString();
}
console.log(toString(true));
console.log(toString(false));
// Exercise5:
function calcAverage(array) {
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
function isHigher(array, score) {
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
function countAndSum(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    let count = 0;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            count++;
        }
        else if (input[i] < 0) {
            sum += input[i];
        }
    }
    return [count, sum];
}
console.log(countAndSum(array2));
// Exercise8:
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
console.log(evenOrOdd(11));
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
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
