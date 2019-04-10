import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import ServiceService from './services/ServiceService'
import {GiWyvern} from "react-icons/gi";
import popularCategories from './data/popular-service-categories.mock'

// import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.serviceService = ServiceService.getInstance();
        this.state = {
            popularServices: []
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

            <div className="container">
                <Router>
                    <div>
                        <GiWyvern size="60"/>
                        <h6> Oracle</h6>
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
                        <Route exact path="/" render={() => (
                            <Redirect to="/home"/>
                        )}/>
                        <Route
                            path="/home"
                            exact
                            render={() => <Home services={this.state.popularServices}/>}/>
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
