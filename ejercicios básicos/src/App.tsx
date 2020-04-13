import React from 'react';
import './App.css';
import { ClickCounter } from './examples/ClickCounter';
import { ThemeProvider } from './Hooks/useContext';
import StateHooksComponent from './examples/StateHooksComponent';

function App() {
  return (
    <div className="App">
      <h1>Debugger</h1>
     <ClickCounter initial={0}/>
     <ThemeProvider />
     <StateHooksComponent />
    </div>
  );
}

export default App;
