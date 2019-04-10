import React from 'react'
import ServiceTabItem from './ServiceTabItem'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const ServiceTabNavigator = ({services}) => {
    return <Router>
        <div>
            <ul className="nav nav-tabs">
                {
                    services.map(service =>
                        <li key={service.id} className="nav-item">
                            <Link to={service.category_name} className="nav-link" href="#">
                                {service.category_name}
                            </Link>
                        </li>
                    )
                }
            </ul>
            <br/>
            <Route path="/Home Improvements" render={() =>
                <ServiceTabItem services={services[0].services.splice(0, 6)}/>}/>
            <Route path="/Pets" render={() =>
                <ServiceTabItem services={services[1].services.splice(0, 6)}/>}/>
        </div>
    </Router>
}


export default ServiceTabNavigator