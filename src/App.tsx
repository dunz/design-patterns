import React from 'react'
import './App.css'
import {Singleton} from "./Singleton";

function App() {
  const ins1 = new Singleton();
  const ins2 = new Singleton();
  const ins3 = new Singleton();

  console.log('ins1 === ins2', ins1 === ins2);
  console.log('ins1 === ins3', ins1 === ins3);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
