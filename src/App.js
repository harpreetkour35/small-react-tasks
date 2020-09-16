import React from 'react';
import './App.css';
import TaskOne from './components/TaskOne/TaskOne';
import TaskTwo from './components/TaskTwo/TaskTwo';
import TaskThree from './components/TaskThree/TaskThree';
import TaskFour from './components/TaskFour/TaskFour';
import TaskFive from './components/TaskFive/TaskFive';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <div>
    <TaskOne />
    <TaskTwo />
    <TaskThree />
    <TaskFour />
    <TaskFive />
  </div>
  );
}

export default App;
