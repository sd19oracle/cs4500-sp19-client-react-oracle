import React from 'react'

const ServiceProvider = ({serviceProvider, index}) =>
    <div>
        <div className="row" key={index}>
            <div className="col-2">
                <img key={index} src="https://picsum.photos/130/130"/>
            </div>
            <div className="col-7">
                <a href="#">
                    {serviceProvider.username}
                </a>
                <div>
                    <span key={serviceProvider.id + 100}> Role: {serviceProvider.role} </span>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                </div>
                <div>
                    {/* <span>{serviceProvider.yearsInBusiness}</span> years in business, */}
                    {/* <span>{serviceProvider.hires}</span> hires */}
                    <span key={serviceProvider.id}> Location: {serviceProvider.zipCode}</span>
                </div>
                <div>
                    {serviceProvider.answers.map(answer  => 
                        <span key={answer.id}> {answer.answer}</span>
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