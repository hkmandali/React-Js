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

function clicked(){
  console.log("I am clicked")
}

function mouseOver(){
  console.log("hovering the mouse")
}

class App extends React.Component
{
  constructor(){
    super()
    this.state ={
      count : 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick()
  {
    //this.state.count++ // we cannot change the state directly , it gives an error
    this.setState(prevState =>{ // here prevState is the previous state of the page
      return{
        count : prevState.count +1
      }
    }
    )
  }
  render()
  {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>CLick me to change the count</button>
      </div>
    )
  }
}

export default App;
