// Pure JavaScript Function:

// A pure JavaScript function is a function that:

// Always returns the same output for the same input: This means it doesn't rely on external state or have side effects (modifying global variables or performing actions outside its scope).
// Has no side effects: It doesn't mutate external data, make network calls, or interact with the DOM. Pure functions are predictable and easier to test.
// Here's an example of a pure function that adds two numbers:

JavaScript
function add(x, y) {
  return x + y;
}

const result = add(5, 3); // result will be 8
// Inheritance in JavaScript:

// Inheritance is a mechanism in object-oriented programming where you create a new class (child class) that inherits properties and methods from an existing class (parent class). This allows for code reuse and promotes hierarchical relationships between objects.

// To create a child class from a parent class, you use the extends keyword:

JavaScript
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Generic animal sound');
  }
}

class Dog extends Animal { // Dog inherits from Animal
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }

  makeSound() {
    console.log('Woof!');
  }
}
// In this example, Dog inherits properties and methods from Animal, but it also adds its own breed property and overrides the makeSound method.

// Class-Based React Component:

// A class-based React component is a way to define reusable UI elements in React using JavaScript classes. It extends the React.Component class and provides a more structured way to manage state, lifecycle methods, and event handling:

// JavaScript
import React from 'react';

class MyComponent extends React.Component {
  // Optional constructor to initialize state
  constructor(props) {
    super(props); // Call the parent constructor
    this.state = {
      count: 0,
    };
  }

  // Methods to handle events, update state, etc.
  handleClick = () => {
    this.setState({ count: this.count + 1 }); // Update state using setState
  }

  // Required render method to return JSX representing the UI
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
// Functional vs. Class-Based React Components:

// Functional Components: Simpler to write, ideal for presenting UI based on props without state or complex lifecycle methods. They are pure functions that take props as input and return JSX output.

// JavaScript
function MyFunctionalComponent(props) {
  return (
    <div>
      <p>Hello, {props.name}</p>
    </div>
  );
}
// Use code with caution.
// Class-Based Components: More suitable for complex components that require managing state, lifecycle methods, or event handling. They offer a more structured way to organize component logic and maintain separation of concerns.

// Choosing Class-Based vs. Functional:

// Use Class-Based Components: For complex components with state management, lifecycle hooks, or error boundaries.
// Use Functional Components: For simpler UI elements that mostly just render based on props. Since React 16.8, functional components can handle most use cases with Hooks, making them a strong choice for many scenarios.
// Use Cases of Class-Based Components:

// Managing state
// Using lifecycle methods (e.g., componentDidMount, componentDidUpdate) for side effects or data fetching
// Creating error boundaries to handle errors within a part of your UI tree