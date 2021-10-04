import React, {Component} from "react";
import axios from "axios";

class create extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            first_name : '',
            last_name : '',
            email : '',
            address1 : '',
            address2 : ''
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

        axios.post(url, this.state)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.data)
            })
    }
    // display(){
    //     console.log(this.state)
    // }

    render(){
        return(
            <div class="create-box">
                <div className="create-text">Create a New Account</div>
                <div className="create-1">
                    <div>
                        <label>First Name:</label>
                        <input type="text" className="create-bx" placeholder="Enter First Name" onChange={this.onHandleInput} name="first_name"></input>
                    </div>
                    <div>
                    <label class="temp-edit">Last Name:</label>
                    <input type="text" className="create-bx" placeholder="Enter Last Name" onChange={this.onHandleInput} name="last_name"></input>
                    </div>
                </div>
                <div className="create-2">
                    <label>Email ID:</label>
                    <input type="email" className="create-bx-1" placeholder="Enter Email ID" onChange={this.onHandleInput} name="email"></input>
                </div>
                <div className="create-3">
                    Address
                </div>
                <div className="create-4">
                    <div className="c-1">
                        <label>Address-1:</label>
                        <input type="text" className="create-bx-2" placeholder="Enter Address 1" onChange={this.onHandleInput} name="address1"></input>
                    </div>
                    <div className="c-2">
                    <label>Address-2:</label>
                        <input type="text" className="create-bx-3" placeholder="Enter Address 1" onChange={this.onHandleInput} name="address2"></input>
                    </div>
                </div>
                    
                <div className="create-5">
                <button className="c-3" onClick={() => this.onSubmit()}>Create Account</button>
                </div>
                {/* <div>
                    <h3> First name is : {this.state.first_name}</h3>
                    <h3> Last name is : {this.state.last_name}</h3>
                    <h3> Email : {this.state.email}</h3>
                    <h3> Address-1 : {this.state.address1}</h3>
                    <h3> Address-2 : {this.state.address2}</h3>
                    
                </div> */}
            </div>
        )
    }

}
export default create;