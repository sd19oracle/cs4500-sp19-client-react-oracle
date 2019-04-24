import React from "react";
import {Link} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
const GlobalNavbar = ({username, isAdmin}) => <nav className="navbar navbar-expand-md navbar-light bg-light mb-3">
  <div className="container">
    <Link className="navbar-brand" to="/home">Oracle</Link>
    <div className="navbar-nav flex-grow-1"/>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link className="nav-link" to="/services"> Services</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/providers"> Providers</Link></li>
    </ul>
    <div className="navbar-nav flex-grow-1"/>
    {username && <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <DropdownButton id="dropdown-basic-button" title="Jose">
          <Dropdown.Item href="profile">Profile</Dropdown.Item>
        </DropdownButton></li>
      <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
      </ul>}
    {!username && <ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
    </ul>}
  </div>
</nav>;

export default GlobalNavbar;
