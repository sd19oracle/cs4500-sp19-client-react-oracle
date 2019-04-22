import React from "react";
import {Field, Form, Formik} from "formik";
import UserService from "../services/UserService";
import * as qs from "query-string";

const Register = ({setUser, location, history}) =>
  <div className={"d-flex"}>
    <Formik
      initialValues={{username: "", password: ""}}
      onSubmit={(values, {resetForm}) => {
        UserService.getInstance().createUser(values)
          .then(() => {
            history.push("/login");
          })
          .catch(err => {
            history.push("/register?fail=true");
            resetForm();
          });
      }}>
      <Form className="m-auto">
        <h1>Register</h1>
        {qs.parse(location.search).fail && <h4 style={{color: "red"}}>Username taken.</h4>}
        <label htmlFor="username">Username</label>
        <Field type="text" name="username" id="username" className={"form-control"}/>
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" id="password" className={"form-control"}/>
        <br/>
        <button type="submit" className="btn btn-primary btn-block">
          Register
        </button>
      </Form>
    </Formik>
  </div>;

export default Register;
