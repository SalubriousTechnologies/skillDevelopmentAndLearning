# Typescript learning & getting started resources

This repository is a combination of resources and simplified guides created to aid in learning and getting started with typescript. The various steps and sections for this are indicated below:

## Setup

To follow along with the session there are three options that you can use:

1. Setup follow along with the [setup guide](setup.md)
2. Download the repository named `typescript-basic-setup` in this folder, which basically has all of the setup done as indicated in point# 1
3. Use the typescript playground online (will not be suitable for react session, if interested in using a similar tool for react session as well try out [codesanbox](https://codesandbox.io/s/)) by [accessing here](https://www.typescriptlang.org/play)

## Overview

Typescript is popularly referred to as _syntactic sugar_ or _superset of Javascript_. If both of these do not mean much, then you can think of Typescript as being similar to Javascript but with additional syntax that greatly improves readability.

Typescript is a statically typed language as compared to the dynamically typed JS.

_Static vs. Dynamic_

`let a: string = "Hello World";` vs `let a = "Hello World";`

`a = true;` vs `a = true;`

Typescript raises in error in this case as the type is being changed

_Note:_ this is different from type-coercion which is basically what happens when you attempt `!![]` in the console or any JS repl.

## Types

A detailed discussion, however non-exhaustive, can be accessed from the file [Type Basics](TypeBasic.md)

## Functions

An overview discussion of functions in TS is presented in the file [Functions](Functions.md)

## Classes

Typescript adds tremendous value when used with Classes in JS, many of the synonymous characteristics of Classes which are missing in JS by default are made available through TS. `readonly, private, protected` some of these have however been added to JS as well eg. using `#methodName` to indicate a private method.

The TS handbook has a section dedicated to working with classes and can be accessed from [here](https://www.typescriptlang.org/docs/handbook/2/classes.html)

For a quick understanding of the challenges of `this` in JS and how to use TS to mitigate them refer to [this section](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-at-runtime-in-classes) of the handbook.

For getting started with visit the file [\_first.js](./classes/_first.js)

## Generics

Example of generic code:

- [Sorting method](https://gist.github.com/JulianG/a935bee4328813c6aaebf2b229eb360d)

Heavily used in libraries, and will likely encounter in type definition files. These are particularly powerful when used with classes or in conjunction with interfaces using the `extend` keyword.

## TSX and React Typings [WIP]

Reading [type definition file](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v16/index.d.ts) generally available through `@types/<package>`

## Streamlining Workflow [Resource List]

- [Concurrently](https://www.npmjs.com/package/concurrently)
- [Migrating existing workflow](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)
