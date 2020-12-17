import logo from './logo.svg';
import './App.css';
import React from "react"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component
{
  constructor(){
    super()
    this.state ={
      answer : "done"
    }
  }
  render()
  {
    return (
      <div>
        <h1>Implemented class based Component {this.state.answer}</h1>
      </div>
    )
  }
}

export default App;
