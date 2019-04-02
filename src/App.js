import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import {GiWyvern} from "react-icons/gi";
// import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="container-fluid">
      //   <h1>ServiceRus</h1>
      //   <Router>
      //     <div>
      //       <Link to="/admin">Admin</Link>
      //       <Route
      //           path="/admin"
      //           component={Admin}/>
      //     </div>
      //   </Router>
      // </div>
      
      <div  className="container">
        
        
          <Router>
              <div>
                  <Link to="/home" style={{color: 'black'}}><GiWyvern size="60" /> 
                  <h6> Oracle</h6> </Link>
                  <Link to="/home">Home</Link> |
                  <Link to="/services"> Services</Link> |
                  <Link to="/providers"> Providers</Link> |
                  <Link to="/admin"> Admin</Link> |
                  <Link to="/provider"> Provider</Link>
                  <br/>
                  <br/>

                  {/* <Route
                      path="/provider"
                      exact
                      render={() =>
                          <Provider
                              provider={serviceCategories[0].serviceProviders[0]}/>}/> */}
                  <Route
                      path="/home"
                      exact
                      component={Home}/>
                  {/* <Route
                      path="/services"
                      exact
                      component={ServiceNavigator}/> */}
                  <Route
                      path="/admin"
                      exact
                      component={Admin}/>
                  {/* <Route
                      path="/providers"
                      exact
                      component={ServiceProviderNavigator}/> */}
              </div>
          </Router>
        {/*<h1>ServicesRus</h1>*/}
      </div>
    );
  }
}

export default App;
