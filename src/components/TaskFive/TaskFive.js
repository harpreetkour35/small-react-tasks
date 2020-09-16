
import React, { useState } from 'react'

function TaskFive() {

    const [principal, setPrincipal] = useState('');
    const [percentage, setPercentage] = useState('');
    const [result, setResult] = useState('');

    function gstCalculator() {
        let result = (principal * percentage ) / 100
        setResult(result)
    }


    return (
        <div className='container'>
            <h2>Task 5: GST Calculator</h2>
            <div className='flex-box-container'>
                <label>Amount</label>
                <input type="number" id="value" placeholder="Enter your amount" onChange={e => setPrincipal(e.target.value)}/>
                <label>Pick GST Percentage</label>
                <select id="options" onChange={e => setPercentage(e.target.value)}>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                </select>
            </div>
            <div className='flex-box-container'>
            <button className="btn btn-success" type="button" onClick={gstCalculator}>Calculate</button>
            <button className="btn btn-danger" type="button">Reset</button>
    <div><h1>{result}</h1></div>
         </div>
            
        </div>
    )
}

export default TaskFive