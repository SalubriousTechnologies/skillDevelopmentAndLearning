// implements with interface
interface Human {
  name: string;
  contactNumber: string;
}

// structural comparison
class Person implements Human {
  name: string;
  contactNumber: string;
  address: string;
  constructor(name: string, contactNumber: string, address: string) {
    this.name = name;
    this.contactNumber = contactNumber;
    this.address = address;
  }
  /*
    Alternately Parameter Properties can be used
    */

  //   constructor(
  //     public name: string,
  //     public contactNumber: string,
  //     protected address,
  //   ) {}
}

// extends
class Doctor extends Person {
  category: string;
  constructor(
    name: string,
    contactNumber: string,
    address: string,
    category: string,
  ) {
    super(name, contactNumber, address);
    this.category = category;
  }
  // getter and setters
  get fees(): number {
    if (this.category === "A") {
      return 50;
    } else return 100;
  }
}

// [visibility modifiers] public, protected, private

// static - do not require an instance

// abstract classes

// explanation of `this` with TS in Class
