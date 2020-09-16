
import React, { useState } from 'react'

function TaskFour() {
    const initBtnState = {
        btnOne: null,
        btnTwo: null,
        btnThree: null,
        btnFour: null,
    };

    const [buttonClass , setButtonClass] = useState(initBtnState);
   
    

    function buttonColorChange(buttonThingy){
        if (buttonThingy.target.value === "red") {
        
            setButtonClass({
                btnOne: 'btn btn-danger',
                btnTwo: 'btn btn-danger',
                btnThree: 'btn btn-danger',
                btnFour: 'btn btn-danger',
            })
          } else if (buttonThingy.target.value === "green") {
            setButtonClass({
                btnOne: 'btn btn-success',
                btnTwo: 'btn btn-success',
                btnThree: 'btn btn-success',
                btnFour: 'btn btn-success',
            })
          } else if (buttonThingy.target.value === "reset") {
            setButtonClass(initBtnState);
          } else if (buttonThingy.target.value === "random") {
              randomButtonColor()
          }
    }


    function randomButtonColor() {
        let buttonChoices = ["btn btn-danger", "btn btn-primary", "btn btn-success", "btn btn-warning" ]
        
        function generateRandomChoice() {
            return(buttonChoices[Math.floor(Math.random()*buttonChoices.length)])
        }

        setButtonClass({
            btnOne: generateRandomChoice(),
            btnTwo: generateRandomChoice(),
            btnThree: generateRandomChoice(),
            btnFour: generateRandomChoice(),
        })
       
    }

    return (
        <div className='container'>
            <h2>Task 4: Change the color of all buttons</h2>
            <div className='flex-box-container'>
            <form action="">
                <select onChange={buttonColorChange}>
                    <option value="random">Random Color</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="reset">Reset</option>
                </select>
            </form>
            <button className={buttonClass.btnOne || "btn btn-primary"}>Wee!</button>
            <button className={buttonClass.btnTwo || "btn btn-danger"}>Woah!</button>
            <button className={buttonClass.btnThree || "btn btn-warning"}>Yippie!</button>
            <button className={buttonClass.btnFour || "btn btn-success"}>Yay!</button>
            </div>
        </div>
    )
}

export default TaskFour