import React from 'react'

const ServiceTabItem = ({services}) =>
    <div className="row">
        {
            services.map(service => {
                   return <div key={services.indexOf(service)}
                         className="card col-4 no-border">
                        <img src={service.thumbnail} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="/providers">{service.serviceName}</a>
                            </h5>
                        </div>
                    </div>
                }
            )
        }
    </div>

export default ServiceTabItem