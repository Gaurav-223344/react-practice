import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

root.render(<App />);

// function timer(){
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   ReactDOM.createRoot(document.getElementById('root')).render(element)
// }

// setInterval(timer, 1000)


