# JavaScript Object Orientation

## Why?

- Helps organize and structure code
- Helps design code that is easier to read, understand and change
- Structurally establishes relationships between data and functions
- Encapsulates all information and behavior of instances

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

## Constructor function

- Used to initialize class properties when new instance is created

## This

- Can reference object it is inside
- Similar to Ruby’s self

## Private Properties

- Not available in modern versions of JS
- Can mimic private properties by adding _ to property name
- `class ClassName() { constructor(amount){ this._amount: amount }}`

## Methods

### Types of methods:

#### Standard Methods(Instance Methods)

- Available to any instance they belong to
- Can be called from inside other methods just like properties
- Behaviors of a class instance

#### Static Methods(Class Methods)

- Class level methods
- Can not invoke on an instance
- Often used in ‘utility’ classes: classes that encapsulate a set of related methods but dont need to be made into instances

#### Getter method

- `get` keyword was introduced in modern JS
- Used when retrieving data from an instance
- Benefit of using it is avoiding calling behavior until it is accessed
- Will increase performance
- Binds an object property to a function that will be called when that property is looked up

#### Setter Method

- Used to change data
