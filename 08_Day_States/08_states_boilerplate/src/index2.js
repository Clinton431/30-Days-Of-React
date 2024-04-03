// #### Introduction
// State and props are both used to pass data between components in React, but they serve different purposes and have important differences in how they work.

// #### What is state?
// State is data that is private and controlled within a component. It is mutable and can be updated over time using the setState() method. State is commonly used to track dynamic data that changes during the lifetime of a component, such as form inputs, toggles, etc. 

// #### How to access state
// State can be accessed using this.state within a class component. For example:

// ```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
      </div>
    );
  }
}
// ```

// #### How to set state
// State should be updated using the setState() method to ensure proper re-rendering. For example: 

// ```js 
this.setState({count: this.state.count + 1});
// ```

// #### What are props?
// Props are immutable and passed from parent to child components. They allow components to communicate with each other by passing data as arguments. Props are received by child components using this.props.

// #### Difference between props and state
// - Props are passed from parent to child and are immutable, while state is private to a component and can be updated over time.
// - Props allow passing of data between components, while state is used to track dynamic data local to a component.