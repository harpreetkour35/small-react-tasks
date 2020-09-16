import React, { useState } from 'react';
import './TaskOne.css';

function TaskOne() {
    const [age, setAge] = useState();

    function ageInDays() {
      const birthYear = prompt("What year were you born...good friend?");
      const age = (2020 - birthYear) * 365;
      setAge(age);      
    }
    
    function reset() {
      setAge();
    }

    return (
        <div className="container">
            <h2>Task 1: Your age in days</h2>
            <div className="flex-box-container">
                <button type="button" className="btn-primary btn" onClick={ageInDays}>Click me</button>
                <button type="button" className="btn-danger btn" onClick={reset}>Reset</button>
            </div>
            <div className="container">{ age !== undefined ?`You are ${age} days old` : null }</div>
        </div>
    );


}

export default TaskOne;
