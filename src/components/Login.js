import React from "react";


const Login = () =>
  <div className="container">
    <h1>Welcome back</h1>
    <br/>
    <div>
      <div className="row">
        <div className="col-12">
          <label for="email">Email</label>
          <input id="email" className="form-control"/>
        </div>
        <div className="col-12">
          <br/>
          <label for="password">Password</label>
          <input id="password" className="form-control"/>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-6">
          <label for="password">
            <input type="checkbox"/>
            &nbsp; Remember me
          </label>
        </div>
        <div className="col-6">
          <a className="float-right" href="#">Forgot password?</a>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-12">
          <a href="/profile" className="btn btn-primary btn-block">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>

export default Login
