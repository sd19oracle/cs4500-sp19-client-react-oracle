import React from "react";
import {Link} from "react-router-dom";

const GlobalNavbar = ({username: name, isAdmin}) => <nav className="navbar navbar-expand-md navbar-light bg-light mb-3">
  <div className="container">
    <Link className="navbar-brand" to="/home">Oracle</Link>
    <div className="navbar-nav flex-grow-1"/>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link className="nav-link" to="/services"> Services</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/providers"> Providers</Link></li>
    </ul>
    <div className="navbar-nav flex-grow-1"/>
    {name && <ul className="navbar-nav mr-auto">
      {isAdmin && <li className="nav-item"><Link className="nav-link" to="/admin"> Admin</Link></li>}
      <li className="nav-item"><Link className="nav-link" to="/profile">{name}</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
    </ul>}
    {!name && <ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
    </ul>}
  </div>
</nav>;

export default GlobalNavbar;
