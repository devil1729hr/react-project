import React, {Component} from "react";

class LoginPage extends Component{

    // we use constructer to make the changing values dynamic so 
    //that if enter new values than values can changed dynamically  
    constructor(props){
        super(props);
        this.state = {
          email : '',
          password : ''
        }
      }
    // onChange use when we want input from user
    // and onchange will triger a event and we need to capture that event using below method
    handleInput = (event) => {
        //console.log(event.target.value, event.target.name)
        // setState() is predefined function...
        this.setState({
          // we are calling the name and value by pointing out from event to target to name = event to target to value
          [event.target.name] : event.target.value
        });
      }
      
      displayLogin(){
        // use to display output on the page
        // how this.state getting values from constructor
        
        console.log(this.state)
      }
      render(){
        return(
          <div>
            <h1 className="heading">Welcome to Login Page</h1>

            {/* we use require method to upload image in react.js 
            but we don't have to use method when we use image url from web */}
            <img src={require("../images/img.jpg").default} className="img" alt="abcd"/>

            <div className="bottom-space">
              <label className="lable-Text">Enter your Email Id :</label>

              {/* onChnage used to get input from user and display input on console */}
              <input type="email" placeholder="Please enter your email id" className="input-space" onChange={this.handleInput} name="email"/>
            </div>
    
            <div className="bottom-space">
              <label className="lable-Text">Enter your Password :</label>
              <input type="password" placeholder="Please enter your password" className="input-space" onChange={this.handleInput} name="password"/>
            </div>
    
            <div className="bottom-space">
              <button onClick={() => this.displayLogin()}>Login</button>
            </div>
    
            <div>
              <h2>The typed email is - {this.state.email}</h2>
              <h2>The typed password is - {this.state.password}</h2>
            </div>
          </div>
        )
      }
    }
    

export default LoginPage;