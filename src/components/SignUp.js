import React from 'react'
import UserService from '../services/UserService'
import {Redirect} from 'react-router-dom'
import Home from '../components/Home'
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.UserService = UserService.getInstance();
        this.createUser = this.createUser.bind(this);
    }

    createUser(event) {    
        event.preventDefault();
        const data = new FormData(event.target);
        let info = {firstname : data.get('firstname'),
                lastname : data.get('lastname'),
                email : data.get('email'),
                password : data.get('password')}
        console.log(info)
        this.UserService.createUser(info);
        this.props.history.push({pathname :'/home', state: { username: data.get('firstname')}});
    }


    render() {
        return(
            <div>
                <h2> Create your account </h2>
            <div className="box-layout">
                <div className = "box-layout_box">
                    <form onSubmit={this.createUser}>
                        <label>
                            <h5> FirstName </h5>
                        <input type="text" name="firstname" />
                        </label>
                        <label>
                            <h5> LastName </h5>
                            <input type="text" name="lastname" />
                        </label>
                        <label>
                            <h5> Email </h5>
                            <input type="email" name="email" placeholder="Email" />
                        </label>
                        <label>
                            <h5> Password </h5>
                            <input type="password" name="password" placeholder="Password" />
                        </label>
                        <br/>
                        <button className="button">Sign up</button>
                    </form>
                </div>
                </div>
            </div>
        )}
}

export default SignUp