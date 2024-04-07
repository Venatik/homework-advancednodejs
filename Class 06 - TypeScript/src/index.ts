abstract class Vehicle {
  constructor(
    private _id: number,
    protected registrationNumber: number,
    public manufacturer: string,
    public model: string,
    public yearOfProduction: number,
    public price: number
  ) {}

  get id(): number {
    return this._id;
  }

  abstract calculateDeprecation(): number;
}

class Car extends Vehicle {
  numberOfDoors: number;

  constructor(
    id: number,
    registrationNumber: number,
    manufacturer: string,
    model: string,
    yearOfProduction: number,
    price: number,
    numberOfDoors: number
  ) {
    super(id, registrationNumber, manufacturer, model, yearOfProduction, price);
    this.numberOfDoors = numberOfDoors;
  }

  get registrationNum(): number {
    return this.registrationNumber;
  }

  set registrationNum(value: number) {
    const valueString = value.toString();
    if (valueString.length !== 4) {
      throw new Error("Registration number must be exactly 4 digits long.");
    }
    this.registrationNumber = value;
  }

  calculateDeprecation(): number {
    return (
      (new Date().getFullYear() - this.yearOfProduction) * 0.1 * this.price
    );
  }

  drive() {
    console.log(
      "The car goes vroom vroom. Unless it's electric then it goes bzzzzz."
    );
  }

  displayDetails(): void {
    console.log(
      `Registration Number: ${this.registrationNumber}, Manufacturer: ${this.manufacturer}, Model: ${this.model}, Year of Production: ${this.yearOfProduction}, Price: ${this.price}, Number of Doors: ${this.numberOfDoors}`
    );
  }
}

const myCar = new Car(1, 1234, "Opel", "Corsa", 2019, 7000, 5);
myCar.registrationNum = 2345;
myCar.drive();
myCar.displayDetails();
console.log(myCar.calculateDeprecation());

class Plane extends Vehicle {
  numberOfEngines: number;

  constructor(
    id: number,
    registrationNumber: number,
    manufacturer: string,
    model: string,
    yearOfProduction: number,
    price: number,
    numberOfEngines: number
  ) {
    super(id, registrationNumber, manufacturer, model, yearOfProduction, price);
    this.numberOfEngines = numberOfEngines;
  }

  get registrationNum(): number {
    return this.registrationNumber;
  }

  set registrationNum(value: number) {
    const valueString = value.toString();
    if (valueString.length !== 6) {
      throw new Error("Registration number must be exactly 6 digits long.");
    }
    this.registrationNumber = value;
  }

  calculateDeprecation(): number {
    return (
      (new Date().getFullYear() - this.yearOfProduction) * 0.15 * this.price
    );
  }

  takeOff() {
    console.log("The plane is taking off.");
  }

  displayDetails(): void {
    console.log(
      `Registration Number: ${this.registrationNumber}, Manufacturer: ${this.manufacturer}, Model: ${this.model}, Year of Production: ${this.yearOfProduction}, Price: ${this.price}, Number of Engines: ${this.numberOfEngines}`
    );
  }
}

const myPlane = new Plane(2, 123456, "Airbus", "A370", 2000, 1000000, 4);

myPlane.takeOff();
myPlane.displayDetails();
console.log(Math.floor(myPlane.calculateDeprecation()));
