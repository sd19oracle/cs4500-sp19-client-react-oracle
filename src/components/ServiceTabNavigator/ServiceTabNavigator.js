import React from 'react'
import ServiceTabItem from './ServiceTabItem'
import {BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom'

const ServiceTabNavigator = ({services}) => {

    return <Router>
        <div>
            <ul className="nav nav-tabs">
                {
                    services.map((service, index) => {
                            let url = "/home/" + service.category_name;
                            return <li key={index} className="nav-item">
                                <Link to={url} className="nav-link" href="#">
                                    {service.category_name}
                                </Link>
                            </li>
                        }
                    )
                }
            </ul>
            <br/>
            <Switch>
                {
                    services.map(service => {
                            let path = "/home/" + service.category_name;
                            return <Route exact path={path}
                                          render={() =>
                                              <ServiceTabItem services={service.services.splice(0, 6)
                                              }/>
                                          }/>

                        }
                    )
                }
            </Switch>
        </div>
    </Router>
};


export default withRouter(ServiceTabNavigator)