import React from 'react';
import './App.css';
import TimedStyle from './Components/TimedStyle/TimedStyle';
import Todolist from './Components/Todolist/Todolist';
import Counter from './Components/BillMurrayComponent/Counter';

function App() {
  return (
    <div>
      <TimedStyle />
      <Todolist />
      <Counter />
    </div>
  );
}


export default App;