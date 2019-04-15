import React from 'react'
import {Link} from 'react-router-dom'
import {GiBarracks, GiBank, GiSpikedDragonHead, GiTechnoHeart, GiDiceTwentyFacesTwenty } from "react-icons/gi";
const ServiceCategoryPills = () =>
    <ul className="nav nav-pills nav-fill wd-shadow wd-padding-20">
        <li className="nav-item">
            <Link className="nav-link btn-lg text-center"
               to="/services/home">
                <GiBarracks />
                <br/>
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link btn-lg text-center"
               to="/services/pets">
                <GiSpikedDragonHead />
                <br/>
                Pets
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link btn-lg text-center"
               to="/services/wellness">
                <GiTechnoHeart />
                <br/>
                Wellness
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link btn-lg text-center"
               to="/services/business">
                <GiBank />
                <br/>
                Business
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link btn-lg text-center"
               to="/services">
                <GiDiceTwentyFacesTwenty />
                <br/>
                More
            </Link>
        </li>
    </ul>

export default ServiceCategoryPills