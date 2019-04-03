/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. By default, 'this' will be all the objects, functions, and variables in the browser window.
 * 2. In implicit binding, whatever is left of the dot is 'this'.
 * 3. New binding is creating an instance of a function along with its contructor.
 * 4. Explicit binding is a bit more difficult. With explicit binding you have to call functions
 *    that are outside of the object and bind them together with .call(), .apply(), or .bind()
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

// console.log(this);

// Principle 2

// code example for Implicit Binding
const cars = {
  make: 'Ford',
  model: 'Mustang GT350',
  topSpeed: 202,
  trackMode() {
    return `${this.make} ${this.model} has a top speed of ${this.topSpeed}/mph`;
  },
  driver: {
    name: 'Carlos',
    whoIsTheCar() {
      return `${this.name} is in the car`;
    },
  },
};
// console.log(cars.trackMode());
// console.log(cars.driver.whoIsTheCar());

// Principle 3

// code example for New Binding

function Car(color, speed) {
  this.color = color;
  this.speed = speed;
}

const ferrari = new Car('Red', 90);
const mustang = new Car('Black', 100);

Car.prototype.getInfo = function() {
  console.log(`The ${this.color} car is going ${this.speed} MPH`);
};

// ferrari.getInfo();
// mustang.getInfo();

// Principle 4

// code example for Explicit Binding
const favCar = {
  name: '2018 Mustang'
}
const mustangs = ['EcoBoost', 'V6', 'GT', 'GT350', 'GT500'];

function MustangVariations(version1, version2, version3, version4, version5) {
  console.log(
    `The models for the ${this.name} are ${version1}, ${version2}, ${version3}, ${version4}, ${version5}`,
  );
}
//------ .call()
/*
* Accepts a list of arguments
*/
MustangVariations.call(favCar, mustangs[0], mustangs[1], mustangs[2], mustangs[3], mustangs[4]);

//------ .apply()
/*
* Accepts a single array of arguments
*/
MustangVariations.apply(favCar, mustangs)

//------ .bind()
/*
 * Will create a new function
 */
const MustangModels = MustangVariations.bind(favCar, ...mustangs);
MustangModels();