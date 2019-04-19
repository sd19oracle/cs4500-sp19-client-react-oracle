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
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SelectUSState from 'react-select-us-states';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.serviceService = ServiceService.getInstance();
        this.state = {
            popularServices: [],
            username: "Jose",
            modalIsOpen: false
        };
        this.logout = this.logout.bind(this);
        this.goToProfile = this.goToProfile.bind(this);

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.setNewValue = this.setNewValue.bind(this);
  }
 
  setNewValue(newValue) {
    console.log('this is the State code:' + newValue);
  }

    openModal() {
        this.setState({modalIsOpen: true});
      }
     
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
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
                                <h4> Welcome </h4>
                                <DropdownButton id="dropdown-item-button" title={this.state.username}>
                                    <Dropdown.Item as="button" onClick={this.openModal}>Profile</Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={this.logout}>Log out</Dropdown.Item>
                                </DropdownButton>
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

                            <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            contentLabel="Profile Modal"
                            >
                            <div calssNmae = "box-layout_box">
                                <h2 ref={subtitle => this.subtitle = subtitle}>Profile</h2>
                                <hr></hr>
                                <h2>Legal Name</h2>
                                <hr></hr>
                                <form>
                                    <h6>First Name</h6>
                                    <input />
                                    <h6>Last Name</h6>
                                    <input />
                                </form>
                                <hr></hr>
                                <h3>Date of Birth</h3>
                                <hr></hr>
                                <form>
                                    <h6>Chooes your Birthday</h6>
                                    <input type ="month"/>
                                </form>
                                <hr></hr>
                                <h3> Home Address </h3>
                                <hr></hr>
                                <form>
                                    <h6>Street</h6>
                                    <input type = "text"/>
                                    <h6>City</h6>
                                    <input type = "text"/>
                                    <p>
                                    Select a state: <SelectUSState onChange={this.setNewValue}/>
                                    </p>
                                    <h6>Zip</h6>
                                    <input type = "text"/>
                                    <h6>Email</h6>
                                    <input type = "text" placeholder = "666@gmail.com" disable />
                                    <br />
                                    <hr></hr>
                                    <button onClick={this.logout}>Update the profile</button>
                                    <button onClick={this.logout}>Log out</button>
                                    <button onClick={this.closeModal}>Close</button>
                                </form>
                            </div>
                            </Modal>
                    
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