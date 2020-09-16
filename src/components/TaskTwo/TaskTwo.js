
import React from 'react'
import Img from './Img'

class TaskTwo extends React.Component {

    constructor() {
        super()
        this.state = {
            catData : [] // this array will hold img soruces of all cats!
        }
    }

    handleClick = () => {
        // lets get all exixting cat images.
        let catData = this.state.catData;
       fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
            let value = data[0]['url'];
            catData.push(value); // this is our updated cat catalogue!
            this.setState({
                catData: catData // lets update state with out updated catalogue!
            })
        })
   }


    render() {
        let dataExists = this.state.catData.length ? true : false;
        return (
            <div className="container">
                <h2>Task 2: Cat Pictures</h2>
                <button type="button" className="btn-warning btn" onClick= {this.handleClick}>Generate Cat</button>
                <div>
                    {
                    dataExists ? 
                    this.state.catData.map( (url, index)  => { 
                       return <Img key={index} src={url}/> // JSX Object
                    })
                    : ""
                    }
                </div>
            </div>
        )
    }
    
}

export default TaskTwo