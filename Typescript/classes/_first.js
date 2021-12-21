// const aPoint = new Point(5, 7);
// aPoint(5, 7);
// console.log(aPoint.coordinates());

class Point {
  constructor(x, y) {
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
