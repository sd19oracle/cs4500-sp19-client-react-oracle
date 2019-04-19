import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import Profile from './components/Profile'
import ServiceService from './services/ServiceService'
import SignUp from './components/SignUp'
import {GiWyvern} from "react-icons/gi";
import popularCategories from './data/popular-service-categories.mock'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.serviceService = ServiceService.getInstance();
        this.state = {
            popularServices: [],
            username: "Jose"
        };
        this.logout = this.logout.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
    }

    logout = () => {
        this.setState({username: ""});
    };

    goToProfile = () => {
        this.props.history.push('/profile')
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
                                <DropdownButton id="dropdown-item-button" title={this.state.username}>
                                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={this.logout}>Log out</Dropdown.Item>
                                </DropdownButton>;
                                {"Welcome  " + this.state.username}
                                <Link to="/profile"> Profile </Link>
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


                        <Route exact path="/" render={() => (
                            <Redirect to="/home"/>
                        )}/>
                        <Route
                            exact
                            path="/home"
                            render={() => <Home services={this.state.popularServices}/>}/>
                        <Route
                            path="/signup"
                            exact
                            component={SignUp}/>
                        <Route
                            path="/login"
                            exact
                            component={Admin}/>
                        <Route
                            path="/admin"
                            component={Admin}/>
                        <Route
                            path="/profile"
                            component={Profile} />
                    </div>
                </Router>
            </div>
        );
    }
}