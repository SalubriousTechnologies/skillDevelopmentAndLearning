// implements with interface
interface Human {
  name: string;
  contactNumber: string;
}

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
  //     public address,
  //   ) {}
}

// extends

// [visibility modifiers] public, private, protected

// static - do not require an instance

// abstract classes

// structural comparison

// explanation of `this` with TS in Class
