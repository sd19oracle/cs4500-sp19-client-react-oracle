import React from 'react'

const ServiceTabItem = ({services}) =>
    <div className="row">
        {
            services.map(service =>
                <div key={service.id}
                     className="card col-4 no-border">
                    <img src="https://picsum.photos/300/200" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">
                            <a href="/providers">{service.title}</a>
                        </h5>
                        {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                </div>
            )
        }
    </div>

export default ServiceTabItem