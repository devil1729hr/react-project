import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

class AboutUs extends Component{

    render(){
        return(
            <div>
                <h1>This is about-us page</h1>
                <NavLink to="/">Home Page</NavLink>
                <br/>
                 <NavLink to="/login">Login Page</NavLink>
                 <br/>
                 <NavLink to="/product">Products</NavLink>
                   <br/>
                  <NavLink to="/contact">Contact</NavLink>

            </div>
        )
    }
}
export default AboutUs;