import React from 'react'
import {GiBarracks, GiBank, GiSpikedDragonHead, GiTechnoHeart, GiDiceTwentyFacesTwenty } from "react-icons/gi";
const ServiceCategoryPills = () =>
    <ul className="nav nav-pills nav-fill wd-shadow wd-padding-20">
        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/services/home">
                <GiBarracks />
                <br/>
                Home
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/services/pets">
                <GiSpikedDragonHead />
                <br/>
                Pets
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/services/wellness">
                <GiTechnoHeart />
                <br/>
                Wellness
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/services/business">
                <GiBank />
                <br/>
                Business
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/services">
                <GiDiceTwentyFacesTwenty />
                <br/>
                More
            </a>
        </li>
    </ul>

export default ServiceCategoryPills