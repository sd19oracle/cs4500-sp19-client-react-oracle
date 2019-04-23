import React from "react";
import {Field, Form, Formik} from "formik";
import UserService from "../services/UserService";
import * as qs from "query-string";
import HttpError from "../services/HttpError";


const Login = ({setUser, location, history}) =>
  <div className={"d-flex"}>
    <Formik
      initialValues={{email: "", password: ""}}
      onSubmit={(values, {resetForm}) => {
        UserService.getInstance().login(values.email, values.password)
          .then((user) => {
            setUser(user);
            history.push("/home");
          })
          .catch(err => {
            if (err instanceof HttpError && err.response.status === 401) {
              history.push("/login?fail=true");
            } else {
              alert(err.message);
            }
            resetForm();
          });
      }}>
      <Form className="m-auto">
        <h1>Welcome Back</h1>
        {qs.parse(location.search).fail && <h4 style={{color: "red"}}>Login failed.</h4>}
        <label htmlFor="email">Email address</label>
        <Field type="text" name="email" id="email" className={"form-control"}/>
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
