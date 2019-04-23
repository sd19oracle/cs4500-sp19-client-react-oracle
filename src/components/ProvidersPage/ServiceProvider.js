import React from 'react'

const ServiceProvider = ({serviceProvider}) =>
    <div>
        <div className="row">
            <div className="col-2">
                <img src="https://picsum.photos/130/130"/>
            </div>
            <div className="col-7">
                <a href="#">
                    {serviceProvider.firstName + " "}
                    {serviceProvider.lastName}
                </a>
                <div>
                    <span> Role: {serviceProvider.role} </span>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                </div>
                <div>
                    {/* <span>{serviceProvider.yearsInBusiness}</span> years in business, */}
                    {/* <span>{serviceProvider.hires}</span> hires */}
                    <span> Location: {serviceProvider.zipCode}</span>
                </div>
                <div>
                    {serviceProvider.answers.map(answer  => 
                        <span> {answer.answer}</span>
                    )}
                </div>
            </div>
            <div className="col-3">
                <div>
                    {/* <span className="float-right">{serviceProvider.price}</span> */}
                </div>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a className="btn btn-primary float-right" href="#">
                        View Profile
                    </a>
                </div>
            </div>
        </div>
        <hr/>
    </div>

export default ServiceProvider