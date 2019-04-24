import React from "react";
import {SelectUSState} from "react-select-us-states";
import UserService from "../services/UserService";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.userService = UserService.getInstance();
    this.state = {
      currentUser: {
        // DIRECTLY GET USER INFO
        firstName: "",
        id: 0,
        lastName: "",
        dob: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        email: ""
      }
    };
    console.log(this.userService.getCurrentUser().then(user => console.log(user)))
    this.logOut = this.logOut.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.userService.getCurrentUser().then(user => {
      if (Object.entries(user).length === 0 && user.constructor === Object) {
        this.props.history.push("/login");
      }
      this.setState({
          currentUser: {
            id: String(user.id),
            firstName: user.firstName,
            lastName: user.lastName,
            zipCode: user.zipCode,
            email: user.email,
            street : user.street,
            state : user.state,
            dob : user.dob,
            city: user.city
          }
        }
      )
    })
  }

  logOut() {
    this.setState({user: {email: null}});
    this.props.history.push({pathname: "/logout"});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const tar_name = target.name;

    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        [tar_name]: value
      },
    }));
    console.log(tar_name)
    console.log(value)
  }

  updateUser() {
    this.userService.updateUser(this.state.currentUser).then(user => {
      this.props.setUser(user);
      this.setState({
          currentUser: {
            id: String(user.id),
            firstName: user.firstName,
            lastName: user.lastName,
            zipCode: user.zipCode,
            email: user.email,
            street : user.street,
            state : user.state,
            dob : user.dob,
            city: user.city
          }
        }
      );
      this.props.history.push("/home");
    })

  }

  render() {
    return (
      <div>
        <div className="box2"><h1>Profile</h1></div>
        {/* <Form onSubmit = {this.updateUser}> */}
        <div className="row">
          <div className="column">
            <h2>Legal Name</h2>
            <hr></hr>
            <div>
              <h6>First Name</h6>
              <input name="firstName" value={this.state.currentUser.firstName} onChange={this.handleInputChange}/>
              <h6>Last Name</h6>
              <input name="lastName" value={this.state.currentUser.lastName} onChange={this.handleInputChange}/>
            </div>
            <hr></hr>
          </div>
          <div className="column">
            <h2>Date of Birth</h2>
            <hr></hr>
            <h6>Choose your Birthday</h6>
            <input type="month" name="dob" value={this.state.currentUser.dob} onChange={this.handleInputChange}/>
          </div>
          <div className="column">
            <h2> Location </h2>
            <hr></hr>
            <h6>Street</h6>
            <input type="text" name="street" value={this.state.currentUser.street} onChange={this.handleInputChange}/>
            <h6>City</h6>
            <input type="text" name="city" value={this.state.currentUser.city} onChange={this.handleInputChange}/>
            <h6>State</h6>
            <p>
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
            <input type="text" name="zipCode" value={this.state.currentUser.zipCode} onChange={this.handleInputChange}/>
            <h6>Email</h6>
            <input type="text" name="email" value={this.state.currentUser.email} readOnly={true}/>
            <br/>
          </div>
        </div>
        <hr></hr>
        <button type="button" className="button2" onClick={this.updateUser}> Update</button>
        <button type="submit" className="button2" onClick={this.logOut}> Log out</button>
        {/* </Formik> */}
      </div>)
  }
}

export default Profile
