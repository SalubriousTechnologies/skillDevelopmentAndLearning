// fields

// read-only

// constructor parameters

// Parameter Properties
class Pointer {
  x: number;
  y: number;
  readonly originLength: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    // this.originLength = this.distanceFromOrigin();
  }
  public coordinates() {
    return [this.x, this.y];
  }
  distanceFromOrigin() {
    const hypo = Math.hypot(this.x, this.y);
    // originLength = hypo;
    console.log(`hypo as length is ${this.originLength}`);
    return hypo;
  }
  distanceFromAnotherPoint(AnotherPointer: Pointer) {
    const xDiff = this.x - AnotherPointer.x;
    const yDiff = this.y - AnotherPointer.y;
    const distance = Math.hypot(xDiff, yDiff);
    return distance;
  }
}

class ThreeDimPointer extends Pointer {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
}

const aPointer = new Pointer(3, 4);
const bPointer = new Pointer(9, 12);

console.log(aPointer.distanceFromAnotherPoint(bPointer));
