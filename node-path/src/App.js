import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import utils from 'utils'
import email_png from 'images/email@2x.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={email_png} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{utils.moduleName}</p>
      </div>
    )
  }
}

export default App
