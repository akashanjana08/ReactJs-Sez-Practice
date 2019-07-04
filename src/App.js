import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DynamicTable } from './DynamicTable';
import {clientEvn} from './env'
function App() {
  console.log(clientEvn.getEnv())
  return (
    <div className="App">

      <DynamicTable  />

    </div>
  );
}
export default App;
