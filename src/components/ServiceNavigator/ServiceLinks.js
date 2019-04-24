import React from 'react'
import {Link} from "react-router-dom";
import "./index.css"

const ServiceLinks = ({services}) =>
  <div className="row">
    {services.map(service =>
      <div key={service.id} className="col-4 mb-3">
        <Link to={`/providers/${service.id}`}>{service.serviceName}</Link>
      </div>
    )}
  </div>;

export default ServiceLinks
