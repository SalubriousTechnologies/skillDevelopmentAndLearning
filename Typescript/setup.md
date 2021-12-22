# Setting up Typescript

## Option 1 (Preferred): Per Project Installation

In any existing project setup with npm or yarn typescript can be added by executing the following command `npm install typescript --save-dev`. Note this is a dev dependency and is not part of the production code that gets executed on the server.

## Option 2: Global Install

In case you want typescript to be added globally to your workspace you can execute the following command which will allow you to use typescript globally across your entire workspace. `npm install -g typescript`

# What does 'setup' mean?

The installation/setup primarily provides you the ability to use the typescript compiler (tsc) which provides all of the static type checks and then compiles the typescript code to regular javascript code.

# Configuration of Typescript

To configure the typescript compiler (tsc), a tsconfig.json file is required to be present in the working directory in which the tsc is being used.

In case you need to create this file, you can adding this to your package.json file under the `scripts` property `'tsc:init': 'tsc --init"`. Now upon running the

**NOTE**

- It is _NOT_ a requirement to have this file (tsconfig.json) in order to use typerscript, but is only required in case there is need to configure the compiler to achieve a specific outcome.
- Additionally, this file upon creation sets up the `strict` mode to be active which provides a lot more typescript benefits but at the cost of requiring you to be more explicit about your code.
