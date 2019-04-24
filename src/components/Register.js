import React from "react";
import {Field, Form, Formik} from "formik";
import UserService from "../services/UserService";
import * as qs from "query-string";
import HttpError from "../services/HttpError";

const Register = ({setUser, location, history}) =>
  <div className={"d-flex"}>
    <Formik
      initialValues={{email: "", password: "", firstName: "", lastName: ""}}
      onSubmit={(values, {resetForm}) => {
        const service = UserService.getInstance();
        service.createUser(values)
          .then(() => {
            service.login(values.email, values.password)
              .then((user) => {
                setUser(user);
                history.push("/home");
              })
          })
          .catch(err => {
            if (err instanceof HttpError && err.response.status === 409) {
              history.push("/register?fail=true");
            } else {
              alert(err.message);
            }
            resetForm();
          });
      }}>
      <Form className="m-auto">
        <h1>Register</h1>
        {qs.parse(location.search).fail && <h4 style={{color: "red"}}>Email taken.</h4>}
        <label htmlFor="first">First Name</label>
        <Field type="text" name="firstName" id="first" className={"form-control"}/>
        <label htmlFor="last">Last Name</label>
        <Field type="text" name="lastName" id="last" className={"form-control"}/>
        <label htmlFor="email">Email address</label>
        <Field type="text" name="email" id="email" className={"form-control"}/>
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
