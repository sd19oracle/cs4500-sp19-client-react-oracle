import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import SignUp from './components/SignUp'
import {GiWyvern} from "react-icons/gi";

// import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {username: "Jose"};
    this.logout = this.logout.bind(this);
  }

  logout = () => {
    this.setState({username: ""});
  }

  render() {
    return (
      <div className="container">

        {console.log(this.props)}
        <Router>
          <div>
            <Link to="/home" style={{color: 'black'}}><GiWyvern size="60"/>
              <h6> Oracle</h6></Link>
            <Link to="/home">Home</Link> |
            <Link to="/services"> Services</Link> |
            <Link to="/providers"> Providers</Link> |
            <Link to="/admin"> Admin</Link> |
            <Link to="/provider"> Provider</Link>
            {console.log(this.state)}
            {this.state.username !== "" ?

              (<div className="text-right">
                {"Welcome  " + this.state.username}
                <button className="button" onClick={this.logout}>Log Out</button>
              </div>) : (
                <div>
                  <div className="text-right">
                    <Link to="/signup">Sign up</Link>
                  </div>
                  <div className="text-right">
                    <Link to="/login">Log in</Link>
                  </div>
                </div>
              )}


            <div>
            </div>

            <Route exact path="/" render={() => (
              <Redirect to="/home"/>
            )}/>
            <Route
              path="/signup"
              exact
              component={SignUp}/>
            <Route
              path="/login"
              exact
              component={Admin}/>
            <Route
              path="/home"
              exact
              component={Home}/>
            <Route
              path="/admin"
              component={Admin}/>
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
