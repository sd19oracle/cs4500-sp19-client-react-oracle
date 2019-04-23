import React from 'react'
import './navbar.css'

const ServiceTabNavigator = (props) =>
    <div>
        <ul className="nav nav-tabs">
            {
                props.services.map((service, index) => {
                        return <li key={service.id} className="nav-item">
                            <span className="nav-link" onClick={props.switchCategory}>
                                {service.category_name}
                            </span>
                        </li>
                    }
                )
            }
        </ul>
        <br/>
    </div>;


export default ServiceTabNavigator