import React, {Component} from "react";
import axios from "axios";

class Inbox extends Component{

    constructor(props){
        super(props);
        this.state = {
            userList : []
        }
    }
// GET METHOD CODING
// GET METHOD CODING
// GET METHOD CODING
// GET METHOD CODING
// GET METHOD CODING   
    listUser(){
        const url = "https://reqres.in/api/users?page=2";
        
        // this is promise for api call
        // for promise we have two syntax
        // 1. response shows when(seccess option) : if success during .then will be called response will come
        // 2. error to show error when can't access the data from database due to network issue
        axios.get(url)
            .then( (response) => {
                // Success Code Block
                // under respose will get information related to data
                // console.log(response.data)
                const serverData = response.data;
                console.log(serverData.data)
                this.setState({
                    userList : serverData.data
                })
            })
            .catch( (error) => {
                // Error Code Block
                console.log(error)
            })
    }
    render(){

        const user = this.state.userList.map((value, index) => {
            return(
            <tr key={index}>
                <td>{value.id}</td>
                {/* is first_name and last_name is predifined or we can use any name */}
                <td>{value.first_name}</td>
                <td>{value.last_name}</td>
                <td>{value.email}</td>
                <td>
                    <img src={value.avatar} alt={value.avatar} className="profile-image"/>
                </td>
            </tr>
            )
        })

        return(
            <div>
                <h1>This is Inbox Page</h1>
                <button onClick={() => this.listUser()}> List the User </button>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Profile Picture</th>
                        </tr>
                        </thead>    
                        <tbody>
                            {/* will call the user */}
                            {user}
                            
                        </tbody>
                </table>            
            </div>
        )
    }
}
export default Inbox;