import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {NameCom} from './features/nameDisplay/NameCom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <NameCom />
        {/* <h1>hello</h1> */}
      </header>
    </div>
  );
}

export default App;
