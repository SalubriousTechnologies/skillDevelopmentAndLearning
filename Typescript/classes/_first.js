/*
  This file gives a very very brief overview of classes in JS,
  the objective of this hands-on is to transport this class to
  TypeScript, in the adjoining first.ts file
*/

// Unlike functions in JS, classes cannot be instantiated before
// being defined, the following 1 line of code fails since the
// class is attempted to be instantiated before being defined.

// const aPoint = new Point(5, 7);

// This is a class declaration as compared to a class expression
// you can get more details from the MDN docs at
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Point {
  // Each class upon being instantiated, invokes the constructor
  // function of that class, so in this case any instantiation of
  // the class Point by using `new Point(x,y)` will result in this
  // constructor being invoked which requires 2 parameters to be passed
  constructor(x, y) {
    // this line essentially sets that passed in parameter to be
    // the properties of this class, public here by default
    this.x = x;
    this.y = y;
  }

  coordinates() {
    return [this.x, this.y];
  }

  distanceFromOrigin() {
    const pythagorasDistance = Math.sqrt(
      Math.pow(this.x, 2) + Math.pow(this.y, 2)
    );
    return pythagorasDistance;
  }

  distanceFromAnotherPoint(AnotherPoint) {
    const xDifference = this.x - AnotherPoint.x;
    const yDifference = this.y - AnotherPoint.y;
    const distance = Math.sqrt(
      Math.pow(xDifference, 2) + Math.pow(yDifference, 2)
    );
    return distance;
  }
}

// Inheritance
class ThreeDimPoint extends Point {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
  coordinates() {
    return [this.x, this.y, this.z];
  }
}

const anPoint = new ThreeDimPoint(3, 4, 5);
console.log(anPoint.coordinates());

// const aPoint = new Point();
// aPoint(5, 7);
// console.log(aPoint.coordinates());

// const aPoint = new Point(5, 7);
// console.log(aPoint.coordinates());

// const aPoint = new Point(3, 4);
// const bPoint = new Point(9, 12);

// console.log(`aPoint is ${aPoint.distanceFromOrigin()} units away from origin`);
// console.log(`bPoint is ${bPoint.distanceFromOrigin()} units away from origin`);

// console.log(aPoint.x);
// console.log(
//   `coordinates (${aPoint.coordinates()}) and (${bPoint.coordinates()}) are ${aPoint.distanceFromAnotherPoint(
//     bPoint
//   )} units apart`
// );
