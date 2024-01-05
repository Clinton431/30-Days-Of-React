import React from 'react';
import ReactDOM from 'react-dom';
import asabenehImage from './images/asabeneh.jpg'


const header = (
  <header>
    <h1>Welcome to 30 Days of React</h1>
    <h2>Getting started React</h2>
    <h3>Javascript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Jan 4, 2024</small>
  </header>
)

// const main = (
//   <main>
//     <p>Prerequisites to get started react.js</p>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>Javascript</li>
//       <li>React</li>
//     </ul>
//   </main>
// )


const main = (
  <div className='e-card' id='basic'>
    <img src={asabenehImage} alt='asabeneh'/>
    <h2>Asabeneh Yetayeh</h2>
    <h3>Senior Developer, Finland</h3>
    <h2>Skills</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Sass</li>
      <li>JS</li>
      <li>React</li>
      <li>Redux</li>
    </ul>
    <small>Joined on Aug 30, 2020</small>
  </div>
)




// JSX element footer
// const subscribe = (
//   <container style={subscribeStyles}>
//     <div className='footer-wrapper'>
//       <h1>Subscribe</h1>
//       <p>Sign Up with your email to receive news and updates</p>
//       <label>
//         <input name="myInput" defaultValue="First Name" />
//         <input name="myName" defaultValue="Last Name" />
//         <input name="myEmail" defaultValue="Email" />
//       </label>
//       <button>Default</button>;
//     </div>
//   </container>

const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
)

//JSX element, app, a container or a parent
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement);
