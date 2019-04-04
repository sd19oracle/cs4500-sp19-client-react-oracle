import React from 'react'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.createUser = this.createUser.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            info: {
                ...prevState.info,
                [name]: value
            },
        }));
    }

    createUser(event) {    
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('/api/api/servicesSpecificQuestions', {
            method: 'POST',
            body: data,
          });
    }


    render() {
        return(
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
        )}
}

export default SignUp