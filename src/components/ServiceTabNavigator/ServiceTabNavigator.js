import React from 'react'
import ServiceTabItem from './ServiceTabItem'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const ServiceTabNavigator = ({serviceCategories}) =>
    <Router>
        <div>
            <ul className="nav nav-tabs">
                {
                    serviceCategories.map(serviceCategory =>
                        <li key={serviceCategory.id} className="nav-item">
                            <Link to={serviceCategory.title} className="nav-link" href="#">
                                {serviceCategory.title}
                            </Link>
                        </li>
                    )
                }
            </ul>
            <br/>
            <Route path="/Home Improvements" render={() =>
                <ServiceTabItem services={serviceCategories[0].services.splice(0, 6)}/>}/>
            <Route path="/Pets" render={() =>
                <ServiceTabItem services={serviceCategories[1].services.splice(0, 6)}/>}/>
        </div>
    </Router>

export default ServiceTabNavigator