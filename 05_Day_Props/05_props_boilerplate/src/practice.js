import React from 'react'
import ReactDOM from 'react-dom'

// // Header Component
// const Header = (props) => {
//   console.log(props)
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{props.welcome}</h1>
//         <h2>{props.title}</h2>
//         <h3>{props.subtitle}</h3>
//         <p>
//           {props.firstName} {props.lastName}
//         </p>
//         <small>{props.date}</small>
//       </div>
//     </header>
//   )
// }

// // The App, or the parent or the container component
// // Functional Component
// const App = () => (
//   <div className='app'>
//     <Header
//       welcome='Welcome to 30 Days Of React'
//       title='Getting Started React'
//       subtitle='JavaScript Library'
//       firstName='Asabeneh'
//       lastName='Yetayeh'
//       date='Oct 4, 2020'
//     />
//   </div>
// )

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
// const getUserInfo = (firstName, lastName, country) => {
//   return `${firstName} ${lastName} . Lives in ${country}.`
// }

// // Calling a function

// getUserInfo('Clinton', 'Nyakoe', 'Finland')

// //Component syntax

// // User component should start with an uppercase

// const User = (props) => {
//   return (
//     <div>
//       <h1>
//         {props.firstName}
//         {props.lastName}
//       </h1>
//       <small>{props.country}</small>
//     </div>
//   )
// }
// // calling or instantaiting a component, this component has three properties and we can call the props:firstName, lastName, country
// <User firstName = 'Clinton' lastName='Nyakoe' country='Finland' />
