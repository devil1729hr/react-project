import axios from "axios";
import React, {Component} from "react";

class Draft extends Component{

    constructor(props){
        super(props);
        this.state = {
            name : '',
            job : ''
        }
    }

    onHandleInput = (event) => {

        this.setState({
            [event.target.name] : event.target.value
        }
        )
    }
    onSubmit(){
        const url = "https://reqres.in/api/users"
        
        axios.put(url, this.state)
            .then((response) => {
                console.log(response.data)
                alert("Updated the user input succeessfully")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render(){
        return(
            <div>
                <h1>This is Draft Page</h1>
                <div className="bottom-space">
                    <label className="lable-Text">Enter Your Name</label>
                    <input className="input-space" type="text" placeholder="Please Enter Your Name" onChange={this.onHandleInput} name="name"></input>
                </div>
                <div className="bottom-space">
                    <label className="lable-Text">Enter your Joba Desc</label>
                    <input className="input-space" type="text" placeholder="Please enter your hob desc" onChange={this.onHandleInput} name="job"></input>
                </div>
                <div>
                    <button onClick={() => this.onSubmit()} >Submit</button>
                </div>
            </div>
        )
    }
}
export default Draft;