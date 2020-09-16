
import React, { useState } from 'react';
import Rock from '../../images/rock.jpg';
import Paper from '../../images/paper.jpg';
import Scissors from '../../images/scissors.jpg';

function TaskThree() {

    const [something, setSomething] = useState();
    const [message, setMessage] = useState();
    const [userChoice, setUserChoice] = useState();
    const [computerChoice, setComputerChoice] = useState();

    let rpsGame = (yourChoice) => {
        let humanChoice;
        humanChoice = yourChoice// Saved my choice
        let botChoice = renderSwitch();
        let results = decidewinner(humanChoice, botChoice)
        let message = finalMessage(results);
        const something = humanChoice
        if(humanChoice === "rock") {
            const userChoice = Rock
            setUserChoice(userChoice)
        } else if (humanChoice === "paper") {
            const userChoice = Paper
            setUserChoice(userChoice)
        } else {
            const userChoice = Scissors
            setUserChoice(userChoice)
        }

        if(botChoice === "rock") {
            const computerChoice = Rock
            setComputerChoice(computerChoice)
        } else if (humanChoice === "paper") {
            const computerChoice = Paper
            setComputerChoice(computerChoice)
        } else {
            const computerChoice = Scissors
            setComputerChoice(computerChoice)
        }
        setSomething(something)
        setMessage(message)
    }

    function renderSwitch() {
        let randomNumber = Math.floor(Math.random() * 3)
        switch(randomNumber) {
          case 1:
            return 'rock';
        case 2:
                return 'paper';
        default: 
            return "scissors";
        }
    }

      function decidewinner(hc, bc) {
        let rpsDatabase = {
            rock: { rock: 0.5, paper: 0, scissors: 1 },
            paper: { paper: 0.5, rock: 1, scissors: 0 },
            scissors: { scissors: 0.5, paper: 1, rock: 0 },
          };

           let x = rpsDatabase[hc][bc]
           let y = rpsDatabase[bc][hc]

           return[x, y]
      }

      function finalMessage([yourScore, computerScore]) {
        if (yourScore === 0) {
          return { message: "You Lost", color: "red" };
        } else if (yourScore === 1) {
          return { message: "You won", color: "green" };
        } else {
          return { message: "You tied", color: "yellow" };
        }
      }

      function MainComponent() {
          return(
            <div className='flex-box-container'>
            <img src={Rock} alt='image1' height="150px" width="180px" onClick={() => rpsGame("rock")} />
            <img src={Paper} alt='image2' height="150px" width="180px" onClick={() => rpsGame("paper")} />
            <img src={Scissors} alt='image3' height="150px" width="180px" onClick={() =>rpsGame("scissors")} />
        </div>  
          )
      }

      function ResultComponent() {
        return(
          <div className='flex-box-container'>
          <img style={{ boxShadow: "0px 10px 50px #253ae9" }} src={userChoice} alt='image1' height="150px" width="180px"/>
          <h1 style={{ color: message.color }}>{message.message}</h1>
          <img style={{ boxShadow: "0px 10px 50px #f32618" }}src={computerChoice} alt='image3' height="150px" width="180px"/>
      </div> 
        )
    }

    function playAgain(){
        setSomething()
    }

    return (
        <div className='container'>
            <h2>Task 3: Rock,Paper, Scissors</h2>
            {
                something ? <ResultComponent /> : <MainComponent /> 
            }
            <button className="btn btn-primary" onClick={playAgain}>Play Again</button>

        </div>
)
}

export default TaskThree;