import React from "react";
import {SelectUSState} from "react-select-us-states";
import UserService from "../services/UserService";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // DIRECTLY GET USER INFO 
      // currentUser : UserService.getInstance().getCurrentUser()
      currentUser : { firstname : "Jose", lastname : "CS4500", bd : null, street : "Hunton ave", 
      city : "BOS", state : "MA", zip :"02115", email: "Jose@gmail.com"}
    };
    this.setNewValue = this.setNewValue.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  setNewValue(newValue) {
    console.log('this is the State code:' + newValue);
  }

  logOut() {
    UserService.getInstance().logout()
    this.props.history.push({pathname:"./home"});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
        currentUser: {
            ...prevState.question,
            [name]: value
        },
    }));
}

  updateUser() {
    UserService.getInstance().updateCurrentUser(this.state.currentUser)
    this.props.history.push({pathname:"./home"});
  }

  render() {
    return (
    <div>
      <div className ="box2"> <h1>Profile</h1></div>
      <form onSubmit = {this.updateUser}>
    <div class="row">
    <div class="column" >
          <h2>Legal Name</h2>
          <hr></hr>
          <div>
            <h6>First Name</h6>
            <input name="firstname" value={this.state.currentUser.firstname} onChange={this.handleInputChange}/>
            <h6>Last Name</h6>
            <input name="lastname" value={this.state.currentUser.lastname} onChange={this.handleInputChange}/>
           </div>
           <hr></hr>
  </div>
  <div class="column" >
    <h2>Date of Birth</h2>
    <hr></hr>
      <h6>Choose your Birthday</h6>
      <input type="month" name="bd" value={this.state.currentUser.bd} onChange={this.handleInputChange}/>
  </div>
  <div class="column" >
  <h2> Location </h2>
  <hr></hr>
  <h6>Street</h6>
      <input type="text" name="street" value={this.state.currentUser.street} onChange={this.handleInputChange}/>
      <h6>City</h6>
      <input type="text" name="city" value={this.state.currentUser.city} onChange={this.handleInputChange}/>
      <h6>State</h6>
      <p > 
      <select name="state" value={this.state.currentUser.state} onChange={this.handleInputChange}>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
</select>
      </p>
      <h6>Zip</h6>
      <input type="text" name="zip" value={this.state.currentUser.zip} onChange={this.handleInputChange}/>
      <h6>Email</h6>
      <input type="text" name="email" value={this.state.currentUser.email} disabled style={{background : "yellow"}}/>
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
