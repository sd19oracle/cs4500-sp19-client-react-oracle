import React from 'react'
import {Link} from "react-router-dom";
import "./index.css"

const ServiceCards = ({services}) =>
  <div className="row">
    {services.map(service =>
      <div key={service.id}
           className="card no-border col-6">
        <img src={service.thumbnail}
             alt={service.serviceName}
             className="card-img-top cover"/>
        <div className="card-body">
          <p className="card-text">
            <Link to={`/providers/${service.id}`}>{service.serviceName}</Link>
          </p>
        </div>
      </div>
    )}
  </div>;

export default ServiceCards
