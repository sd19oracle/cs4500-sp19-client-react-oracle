import React from "react";
import {Field, Form, Formik} from "formik";
import UserService from "../services/UserService";
import * as qs from "query-string";


const Login = ({setUser, location, history}) =>
  <div className={"d-flex"}>
    <Formik
      initialValues={{username: "", password: ""}}
      onSubmit={(values, {resetForm}) => {
        UserService.getInstance().login(values.username, values.password)
          .then((user) => {
            setUser(user);
            history.push("/profile");
          })
          .catch(err => {
            history.push("/login?fail=true");
            resetForm();
          });
      }}>
      <Form className="m-auto">
        <h1>Welcome Back</h1>
        {qs.parse(location.search).fail && <h4 style={{color: "red"}}>Login failed.</h4>}
        <label htmlFor="username">Username</label>
        <Field type="text" name="username" id="username" className={"form-control"}/>
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" id="password" className={"form-control"}/>
        <br/>
        <button type="submit" className="btn btn-primary btn-block">
          Log in
        </button>
      </Form>
    </Formik>
  </div>;

export default Login;
