import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import Profile from './components/Profile'
import ServiceService from './services/ServiceService'
import SignUp from './components/SignUp'
import popularCategories from './data/popular-service-categories.mock'
import ProvidersPage from './components/ProvidersPage/ProvidersPage'
import ServiceNavigator from "./components/ServiceNavigator";
import Login from "./components/Login";
import GlobalNavbar from "./components/GlobalNavbar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.serviceService = ServiceService.getInstance();
    this.state = {
      popularServices: [],
      allServices: [],
      username: null,
      modalIsOpen: false
    };
  }

  componentDidMount() {
    for (let i in popularCategories) {
      this.serviceService.findPopularServicesByCategory(popularCategories[i].id, 6)
        .then(services => {
            let newPopularServices = this.state.popularServices;
            newPopularServices.push(
              {
                "id": popularCategories[i].id,
                "category_name": popularCategories[i].name,
                "services": services
              });
            this.setState({
              popularServices: newPopularServices
            });
          }
        )
    }
  }

  render() {
    return (
      <Router>
        <div>
          <GlobalNavbar/>
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
              path="/signup"
              exact
              component={SignUp}/>
            <Route
              path="/providers"
              exact
              component={ProvidersPage}/>
            <Route
              path="/login"
              exact
              component={Login}/>
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
