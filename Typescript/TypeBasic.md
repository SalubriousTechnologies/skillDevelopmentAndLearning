## Types

**Types in Typescript**

Typescript types is categorized into:
• Primitive types
• Object types

**Primitive types**

string
number
boolean
null
undefined
symbol

**Object types**

Object types are functions, arrays, classes, etc.

**Purposes of types in Typescript:**

There are two main purposes of types in Typescript:
• First, types are used by the Typescript compiler to analyze your code for errors
• Second, types allow you to understand what values are associated with variables.

**What is Type Annotation in Typescript**

Typescript uses type annotations to explicitly specify types for identifiers such variables, functions, objects, etc.

Typescript uses the syntax `: type` after an identifier as the type annotation, where type can be any valid type.

`let variableName: type = value`;

**Number**

number is for numbers like 42. JavaScript does not have a special run time value for integers, so there’s no equivalent to int or float - everything is simply number

If number is big integer then we will use

The big integers represent the whole numbers larger than 253 – 1.

`let big: bigint = 9007199254740991n;`

**string**

string represents string values like "Hello, world"
`let title: string = "Web Developer"`;

**Boolean**

boolean is for the two values true and false
`let pending: boolean`;
`pending = true`;

**Undefined**

It accept only one value i.e `undefined`

`let undefinedVar : undefined = undefined`

**null**

It accept only one value i.e `null`

`let nullVar : undefined = null`

**Symbol**

`let sym1 = Symbol();`

**Object Type**

To define type of an object , we do

```
let person : {name:string,age : number} = {
name:’Shivam’,
age:25
}

```

Or
we use type aliases

```
type personObj = {
name:string;
age:number
}

let person : personObj = {
name:'Shivam',
age:25
}
```

we can use optional properties

```
type personObj = {
name:string;
age:number,
mobile? : number
}

let person : personObj = {
name:'Shivam',
age:25
}
```

**Arrays**

To specify the type of an array , the syntax is :

`let arrayName: type[]`;
`let skills: string[] = ['Problem Solving','Software Design','Programming']`;

You can also use this syntax : Array<type>

`let arr1: Array<boolean> = [true, false, true]`;
`let arr2: Array<string> = ["A", "B", "C"]`;

**tuple**

A tuple works like an array with some additional considerations:
• The number of elements in the tuple is fixed.
• The types of elements are known, and need not be the same.

Ex :
`let skill: [string, number] = ['Programming', 5]`;

The order of values in a tuple is important. If you change the order of values of the skill tuple to [5, "Programming"], you’ll get an error.

a tuple can have optional elements specified using the question mark (?) post-fix

`let bgColor, headerColor: [number, number, number, number?]`;

`bgColor = [0, 255, 255, 0.5]`;
`headerColor = [0, 255, 255]`;

**Any**

The Typescript any type allows you to store a value of any type. It instructs the compiler to skip type checking

`let price : any = 25`;
`price = “twenty five”`

**never**

never type is a type that contains no values.
You use the never type to represent the return type of a function that always throws an error.

```
function raiseError(message: string): never {
    throw new Error(message);
}

raiseError(‘Some Error Occured’)
```

**union**

A Typescript union type allows you to store a value of one or several types in a variable.

`let result: number | string`;
`result = 10`;
`result = 'Hi'`;
`result = false`;

```
function printId ( id: number | string) {
console.log("Your ID is: " + id );
}


printId(101);
printId("202");
// Error
printId({ : 22342 });
```

**type aliases**

type aliases is used to define new names for existing types.
We can define type like a variable and reuse it .

`let a : string | number = 10`
`let b : string | number = 20`

instead of repeating types , we can use type aliases

`type varType = number | string`

`let a : varType = 10`
`let b : varType = 20`

**String literal types**

Apply values rather than apply types to a variable or parameter
The string literal type is useful to limit a possible string value in a variable.

`let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown'`;
`mouseEvent = 'click'`;
`mouseEvent = 'dblclick'`;
`mouseEvent = 'mouseup'`;
`mouseEvent = 'mousedown'`;
`mouseEvent = 'mouseover'`; // compiler error

**Enum**

A group of constant
That can ssign a number to your string and make an easy comparison
syntax :

`enum Role {values}`

When to use an enum

You should use an enum when you:
• Have a small set of fixed values that are closely related
• And these values are known at compile time.

```
enum Direction {
Up,
Down,
Left,
Right,
}

function respond(msg: string, dir: Direction): void {
console.log(`${msg} ${dir}`);
}
console.log(respond("we are going in", Direction.Up));

```
