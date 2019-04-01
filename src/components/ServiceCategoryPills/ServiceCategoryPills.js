import React from 'react'

const ServiceCategoryPills = () =>
    <ul className="nav nav-pills nav-fill wd-shadow wd-padding-20">
        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/services">
                <i className="fa fa-home"/>
                <br/>
                Home
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/services">
                <i className="fa fa-paw"/>
                <br/>
                Pets
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/services">
                <i className="fa fa-heart"/>
                <br/>
                Wellness
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/services">
                <i className="fa fa-briefcase"/>
                <br/>
                Business
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/services">
                <i className="fa fa-ellipsis-h"/>
                <br/>
                More
            </a>
        </li>
    </ul>

export default ServiceCategoryPills