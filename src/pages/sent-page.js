import React, {Component} from "react";
import axios from "axios";
class Sent extends Component{

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
        // console.log(this.state)
        const url = "https://reqres.in/api/users"

        axios.post(url, this.state)
            .then((response) =>  {
                console.log(response.data)
                alert('User profile create Successfully')
            })
            .catch((error) => {
                console.log(error.data)
            })
            
    }

    render(){
        return(
            <div>
                <h1>This is Sent Page</h1>
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
export default Sent;