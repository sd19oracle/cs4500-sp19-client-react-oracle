import React from "react";
import {SelectUSState} from "react-select-us-states";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: null,
      },
    };
    this.setNewValue = this.setNewValue.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  setNewValue(newValue) {
    console.log('this is the State code:' + newValue);
  }

  logOut() {
    this.props.history.push({pathname:"./home", state : {username: null}});
  }

  render() {
    return (<div>
      <div className ="box2"> <h1>Profile</h1></div>
      <form>
    <div class="row">
    <div class="column" >
          <h2>Legal Name</h2>
          <hr></hr>
          <div>
            <h6>First Name</h6>
            <input/>
            <h6>Last Name</h6>
            <input/>
           </div>
           <hr></hr>
  </div>
  <div class="column" >
    <h2>Date of Birth</h2>
    <hr></hr>
      <h6>Choose your Birthday</h6>
      <input type="month"/>
  </div>
  <div class="column" >
  <h2> Location </h2>
  <hr></hr>
  <h6>Street</h6>
      <input type="text"/>
      <h6>City</h6>
      <input type="text"/>
      {/* <p>
        Select a state: <SelectUSState id="myId" className="myClassName" onChange={this.setNewValue}/>
      </p> */}
      <h6>Zip</h6>
      <input type="text"/>
      <h6>Email</h6>
      <input type="text" placeholder="DISABLE@example.com" disabled/>
      <br/>
  </div>
  </div>
  <hr></hr>
  <button className="button2">  Update </button>
      </form>
  <button className="button2" onClick={this.logOut}> Log out</button>
  </div>)
  }
}

export default Profile
