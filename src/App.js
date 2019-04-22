import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import Profile from './components/Profile'
import SignUp from './components/SignUp'
import ProvidersPage from './components/ProvidersPage/ProvidersPage'
import ServiceNavigator from "./components/ServiceNavigator";
import Login from "./components/Login";
import GlobalNavbar from "./components/GlobalNavbar";
import UserService from "./services/UserService";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.userService = UserService.getInstance();
    this.state = {
      user: {
        username: null,
      },
    };
  }

  render() {
    return (
      <Router>
        <div>
          <GlobalNavbar username={this.state.user.username} isAdmin={this.state.user.role === "admin"}/>
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route
              exact
              path="/home"
              component={Home}/>
            <Route
              path={["/services/:catId", "/services"]}
              component={ServiceNavigator}/>
            <Route
              path="/register"
              exact
              component={Register}/>
            <Route
              path="/providers"
              exact
              component={ProvidersPage}/>
            <Route
              path="/login"
              exact
              render={({location, history}) =>
                <Login history={history}
                       location={location}
                       setUser={user => this.setState({user})}/>}/>
            <Route path="/logout"
                   exact
                   render={({history}) => {
                     this.userService.logout().then(() => {
                       this.setState({user: {username: null}});
                       history.push("/home");
                     });
                     return null;
                   }}/>
            <Route
              path="/admin"
              component={Admin}/>
            <Route
              path="/profile"
              component={Profile}/>
          </div>
        </div>
      </Router>
    );
  }
}
