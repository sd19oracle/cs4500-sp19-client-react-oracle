import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import ServiceService from './services/ServiceService'
import SignUp from './components/SignUp'
import {GiWyvern} from "react-icons/gi";
import popularCategories from './data/popular-service-categories.mock'
import ProvidersPage from './components/ProvidersPage/ProvidersPage'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.serviceService = ServiceService.getInstance();
        this.state = {
            popularServices: [],
            username: "Jose"
        };
        this.logout = this.logout.bind(this);
    }

    logout = () => {
        this.setState({username: ""});
    };

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
            <div className="container">
                <Router>
                    <div>
                        <Link to="/home" style={{color: 'black'}}><GiWyvern size="60"/></Link>
                        <h6> Oracle</h6>
                        <Link to="/home">Home</Link> |
                        <Link to="/services"> Services</Link> |
                        <Link to="/providers"> Providers</Link> |
                        <Link to="/admin"> Admin</Link> |
                        <Link to="/provider"> Provider</Link>
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


                        <Route exact path="/"
                        component={Home}/>
                        <Route
                            exact
                            path="/home"
                            component={Home}/>
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
                            component={Admin}/>
                        <Route
                            path="/admin"
                            component={Admin}/>
                    </div>
                </Router>
            </div>
        );
    }
}