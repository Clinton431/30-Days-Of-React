import React from 'react'
import ReactDOM  from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

//Header component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days of React</h1>
      <h2>Getting started React</h2>
      <h3>Javascript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Jan 5, 2023</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='asabeneh imag'/>
    <h2>Asabeneh Yetayeh</h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

// Main Component
const Main = () => {
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
    </div>
  </main>
}

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Footer</p>
    </div>
  </footer>
)
// Working with  props 
// const newHeader = (props) => {
//   console.log(props)
//   return (
//     <header>
//       <div className='header-wrapper'>
//       <h1>{props.welcome}</h1>
//       <h2>{props.title}</h2>
//       <h3>{props.subtitle}</h3>
//       <p>
//         {props.firstName} {props.lastName}
//       </p>
//       <small>{props.date}</small>
//       </div>
//     </header>
//   )
// }

// const App = () => (
//   <div className='app'>
//     <Header
//     welcome='Welcome to 30 Days of React'
//     title='Getting Started React'
//     subtitle='Javascript Library'
//     firstName='Clinton'
//     lastName='Nyakoe'
//     date='Jan 8, 2024'
//     />
//   </div>
// )




// The App or the parent or the container component
const App = () => (
  <div className='app'>
    <Header/>
    <Main />
    <Footer />
  </div>
)
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)