import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ServiceAnswers from './ServiceAnswers'

const Admin = () =>
    <div>
        <h2>Admin</h2>
        <Router>
            <div className="row">
                <div className="col-3">
                    <Link to="/admin/service-answers">Service Answers</Link>
                    <br/>
                </div>
                <div className="col-9">
                    <Route
                        path="/admin/service-answers"
                        exact
                        component={ServiceAnswers}/>
                </div>
            </div>
        </Router>
    </div>

export default Admin