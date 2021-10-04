import React, {Component} from "react";

class RegisterPage extends Component{

    constructor(props){
        super(props);
        this.state={
            first_name : '',
            last_name : '',
            email_id : '',
            gender : '',
            date_of_birth : '',
            address : '',
            city : ''
        }
    }
    
    onHandleInput = (event) => {
        // console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onCreateAccount(){
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <h1>Register Page</h1>
                <div className="bottom-space">
                    <label className="lable-text">Enter First Name</label>
                    <input type="text" placeholder = "please enter your name" className="input-space" onChange={this.onHandleInput} name="first_name"></input>
                </div>
                
                <div className="bottom-space">
                    <label className="lable-text">Enter Last Name</label>
                    <input type="text" placeholder = "please last your name" className="input-space"
                    onChange={this.onHandleInput} name="last_name"></input>
                </div>
                <div className="bottom-space">
                    <label className="lable-text">Enter Email ID</label>
                    <input type="email" placeholder = "please your email id" className="input-space"
                    onChange={this.onHandleInput} name="email_id"></input>
                </div>

                <div className="bottom-space">
                <label className="lable-text">Select your gender</label>
                <input type="radio"  className="font" name="gender" onChange={this.onHandleInput} value="Male"/>Male
                <input type="radio"  className="font" name="gender" onChange={this.onHandleInput}
                value="Female"/>Female
                <input type="radio"  className="font" name="gender" onChange={this.onHandleInput}
                value="Others"/>Others
                </div>

                <div className="bottom-space">
                    <label class="lable-text"> Select your DOB:</label>
                    <input type="date" className="input-space" onChange={this.onHandleInput} name="date_of_birth"></input>
                    
                </div>
                <div className="bottom-space">
                    <label class="lable-text"> Enter Your Address</label>
                    <textarea placeholder="please enter your address" className="input-space" onChange={this.onHandleInput} name="address"></textarea>
                    
                </div>
                <div className="bottom-space center-text">
                    <label className="lable-text">Select Your City</label>
                    <select className="input-space" onChange={this.onHandleInput} name="city">
                        <option>Please select any city</option>
                        <option>Delhi</option>
                        <option>Haryana</option>
                        <option>Bihar</option>
                    </select>
                </div>
                <div>
                    <button className="btn" onClick={() => this.onCreateAccount()}>Create Account</button>
                </div>
     
            </div>
        )
    }
}

export default RegisterPage;