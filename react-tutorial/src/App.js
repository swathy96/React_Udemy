import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";

class App extends Component {
  constructor(props){
    super(props)
  
    this.state = {
      users : [],
      loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  obtainUserDetails(){
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then(response => this.setState({
      users: response.data.results,
      loading: false
    }))
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      loading: true,
      users: []
    })
    this.obtainUserDetails();
  }

  componentWillMount(){
    this.obtainUserDetails()
  }

  

  render(){
    const tableBorder = {
      border: "2px solid forestgreen"
    }
    return (
      <div className="App">
        <button onClick={this.handleSubmit}> Load users</button>
       {this.state.loading ? <Loading/>: <table style={tableBorder}>
          <tr>
            <th> Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Gender</th>
          </tr>
        
            {this.state.users.map(user=>{
              return (<tr key = {user.id.value}>
                <td> {user.name.title+"."+user.name.first+" "+user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.cell}</td>
                <td>{user.gender}</td>
              </tr>)
            } )}
         </table>
  }
      </div>
    );
  }
}

export default App;
