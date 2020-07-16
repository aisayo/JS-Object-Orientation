# JavaScript Object Orientation

## Why?

- Helps organize and structure code
- Helps design code that is easier to read, understand and change
- Structurally establishes relationships between data and functions
- Encapsulates all information and behavior of instances
  - <https://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/>
  - <https://codeburst.io/object-oriented-programming-in-javascript-51b2bdfdfe9f>
  - <https://www.freecodecamp.org/news/an-introduction-to-object-oriented-programming-in-javascript-8900124e316a/>

## OO Benefits

- Easy to change
- Provides a clear logical place to add methods
- Offers better data control
- Easy to replicate behavior
- Makes sense to group related things
- Works well for representing real world systems and relationships in code

## Classes

- Class was introduced in ES6
- Behave as templates for instances, blueprints
- Has ability to generate copies of itself, instances
- Each instance has unique data
- To create a class: `class ClassName {}`
- Constructor method allows us to pass in arguments, typically initial data about the object
- Not hoisted: needs to be declared before it is called
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes>

## Constructor function

- Used to initialize class properties when new instance is created
- Syntax: `constructor(){ this.property = value }`
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor>

## This

- Can reference object it is inside/object it belongs to
- Similar to Ruby’s self
- Determined by how a function is called(runtime binding)
- Arrow functions do not bind `this`
- Different `this` values
  - Method: this = owner object
  - Alone: this = global object
  - Function: this = global object
  - Strict mode("use strict"): this = undefined
  - Event: this = element that received event
- Can use `bind()` to set value of `this` regardless of how it is called
- call() & apply(): Let you set `this` value when calling a function
- apply accepts an array as second argument, otherwise similar to call

<pre><code>
function getBrand(prefix) {
    console.log(prefix + this.brand);
}

let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};

getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");`
</code></pre>

  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this>
  - <https://www.w3schools.com/js/js_this.asp>
  - `bind()`: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind>
  - `call()`: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call>
  - `apply()`: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply>
  - <https://www.javascripttutorial.net/javascript-this/>

## Methods

### Types of methods:

#### Standard Methods(Instance Methods)

- Available to any instance they belong to
- Can be called from inside other methods just like properties
- Behaviors of a class instance
- Should be declared inside class function, after constructor

#### Static Methods(Class Methods)

- Class level methods
- Can not invoke on an instance
- Often used in ‘utility’ classes: classes that encapsulate a set of related methods but dont need to be made into instances

#### Getter and Setter Methods

- Introduced in ES6
- Can be used for reading and writing properties
  - <https://www.quora.com/Why-would-someone-use-getter-and-setter-instead-of-methods-in-JavaScript>