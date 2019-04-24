import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import Profile from './components/Profile'
import ProvidersPage from './components/ProvidersPage/ProvidersPage'
import ServiceNavigator from "./components/ServiceNavigator";
import Login from "./components/Login";
import GlobalNavbar from "./components/GlobalNavbar";
import UserService from "./services/UserService";
import Register from "./components/Register";

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

  componentDidMount() {
    this.userService.getCurrentUser().then(user => {
      if (user) this.setState({user});
    });
  }

  setUser = user => this.setState({user});

  render() {
    return (
      <Router>
        <div>
          <GlobalNavbar username={this.state.user.firstName}
                        isAdmin={this.state.user.role === "admin"}/>
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
                       setUser={this.setUser}/>}/>
            <Route path="/logout"
                   exact
                   render={({history}) => {
                     this.userService.logout().then(() => {
                       this.setState({user: {email: null}});
                       history.push("/home");
                     });
                     return null;
                   }}/>
            <Route
              path="/admin"
              component={Admin}/>
            <Route
              path="/profile"
              render={({history}) => <Profile history={history} setUser={this.setUser}/>}/>
          </div>
        </div>
      </Router>
    );
  }
}
