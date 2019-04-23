import React from 'react'
import {Link} from 'react-router-dom'
import {GiBarracks, GiBank, GiSpikedDragonHead, GiTechnoHeart, GiDiceTwentyFacesTwenty } from "react-icons/gi";
const ServiceCategoryPills = () =>
    <ul className="nav nav-pills nav-fill wd-shadow wd-padding-20">
        <li className="nav-item">
            <Link className="nav-link btn-lg text-center"
               to="/services/2">
                <GiBarracks />
                <br/>
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link btn-lg text-center"
               to="/services/3">
                <GiSpikedDragonHead />
                <br/>
                Pets
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link btn-lg text-center"
               to="/services/4">
                <GiTechnoHeart />
                <br/>
                Wellness
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link btn-lg text-center"
               to="/services/5">
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