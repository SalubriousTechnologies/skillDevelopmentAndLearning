## Functions

**function types**

A function type has two parts: parameters and return type.

`(parameter: type, parameter:type,...) => type`

**Named function :**

```
function sum(x: number, y: number) : number {
    return x + y;
}

sum(2,3);
```

**Anonymous**

```

let Sum = function(x: number, y: number) : number
{
    return x + y;
}

Sum(2,3);

```

**Optional Parameters**

Use the parameter?: type syntax to make a parameter optional.

```
function Greet(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

Greet('Hello','Steve');
Greet('Hi');
Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.
```

Note : The optional parameters must appear after the required parameters in the parameter list.

**Default Parameters**

```

function Greet(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

Greet('Steve');
Greet('Steve', 'Hi');
Greet('Bill');
```

**Arrow Functions**

```
let sum = (x: number, y: number): number => {
    return x + y;
}

sum(10, 20); //returns 30
```

**void**

void represents the return value of functions which don’t return a value.

```
Const add = () :void =>{
 console.log(‘Nothing getting return’)
}
add();
```

**Rest parameters**
rest parameters that allows you to represent an indefinite number of arguments as an array.

rest parameters follow these rules:
• A function has only one rest parameter.
• The rest parameter appears last in the parameter list.
• The type of the rest parameter is an array type.

Syntax :

```
function fn(...rest: type[]) {
   //...
}
```

```
let greet = (greeting : string , …names:string[])=>{
   return `${greeting} ${names.join(‘, ‘)}`;
}
console.log(greet(‘hey’,’shivam’,’hello’))

```

**Parameter Destructuring**

```
function sum({ a, b, c }: { a: number; b: number; c: number }) {
console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
```

you can use a named type here as well:

```
type ABC= { a: number; b: number; c: number };

function sum({ a, b, c }: ABC) {
console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
```

## Generics

Typescript generics allow you to write the reusable and generalized form of functions, classes, and interfaces

Generics provide a way to make components work with any data type and not restrict to one data type. So, components can be called or used with a variety of data types.

Syntax :

```
function funcName <Type> (arg: Type) : Type {
  return arg
}

```

```
Example : 1

const lastElement = <T> ( arr : T[] ) : T =>{
  return arr[arr.length - 1]
}

const num = lastElement<number>([1,2,3])

const str = = lastElement<number>([‘a’,’b’,’c’])

```

```
Example : 2

const putElementInArray = <T,U>(x:T, y:U) : [T,U]=>{
return[x,y]
}
const el = putElementInArray<number,number>(1,2)
const el2 = putElementInArray<string,string>(‘1’,’2’)
const el3 = putElementInArray<string,number>(‘1’,2)
```
