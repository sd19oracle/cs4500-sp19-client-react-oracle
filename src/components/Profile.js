import React from "react";
import {SelectUSState} from "react-select-us-states";

class Profile extends React.Component {
  render() {
    return <div className="box-layout_box">
      <h2 ref={subtitle => this.subtitle = subtitle}>Profile</h2>
      <hr></hr>
      <h2>Legal Name</h2>
      <hr></hr>
      <form>
        <h6>First Name</h6>
        <input/>
        <h6>Last Name</h6>
        <input/>
      </form>
      <hr></hr>
      <h3>Date of Birth</h3>
      <hr></hr>
      <form>
        <h6>Choose your Birthday</h6>
        <input type="month"/>
      </form>
      <hr></hr>
      <h3> Home Address </h3>
      <hr></hr>
      <form>
        <h6>Street</h6>
        <input type="text"/>
        <h6>City</h6>
        <input type="text"/>
        <p>
          Select a state: <SelectUSState onChange={this.setNewValue}/>
        </p>
        <h6>Zip</h6>
        <input type="text"/>
        <h6>Email</h6>
        <input type="text" placeholder="user@example.com"/>
        <br/>
        <hr></hr>
      </form>
    </div>
  }
}

export default Profile
