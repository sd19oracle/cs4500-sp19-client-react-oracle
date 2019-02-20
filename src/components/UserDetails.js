import React from 'react'
import UserService from '../services/UserService'
class UserDetails extends React.Component {
    constructor(props) {
        super(props)
        this.userService = UserService.getInstance()
        this.state = {
            users: [],
            user: {
                username: '',
                id: 1
            }
        }
    }
    componentDidMount() {
        this.userService
            .findAllUsers()
            .then(users => {
                    this.props.history.push("/admin/users/" + users[0].id)
                    this.setState({
                        users: users,
                        user: users[0]
                    })
                }
            )
    }
    selectUser = id =>
        this.userService
            .findUserById(id)
            .then(user => {
                    this.props.history.push("/admin/users/" + id)
                    this.setState({
                        user: user
                    })
                }
            )
    render() {
        return(
            <div>
                <h3>User Details</h3>
                <select
                    value={this.state.user.id}
                    onChange={(e) => this.selectUser(e.target.value)}
                    className="form-control">
                    {
                        this.state.users
                            .map(user =>
                                <option
                                    value={user.id}
                                    key={user.id}>
                                    {user.username}
                                </option>
                            )
                    }
                </select>
                <label>Username</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.user.username}/>
            </div>
        )
    }
}

export default UserDetails