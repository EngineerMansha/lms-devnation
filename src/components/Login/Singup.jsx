import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logoc.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import './login.css';
import { auth } from "./Firebase";
import { async } from "@firebase/util";
function Singup() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, SetsubmitButtonDisabled] = useState(false);
  const handlesubmit = () => {
    if (
      !values.name ||
      !values.email ||
      !values.password ||
      !values.ConfirmPassword
    ) {
      setErrorMsg("Some Filed is Empty");
      return;
    }
    setErrorMsg("All filed is fill ");
    SetsubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        SetsubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        console.log(user);
        navigate("/");
      })

      .catch((err) => {
        setErrorMsg(err.message);
        console.log("Error--1", err.message);
        SetsubmitButtonDisabled(false);
      });
    console.log(values);
  };

  return (
    <>
      <div>
        <div className="container-fluid">
          <div>
            <section className="vh-100" style={{ backgroundColor: "white" }}>
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="text-center my-5">
                      <img
                        src={logo}
                        style={{ width: "400px" }}
                        alt="My Logo"
                      />
                    </div>
                    <div className="alert" role="alert">
                      {errorMsg}
                    </div>
                    <div
                      className="card shadow-2-strong"
                      style={{ borderRadius: "1rem" }}
                    >
                      <div className="card-body p-5 text-start">
                        <form action=""></form>
                        <h1 className="mb-5 font-change  text-center ">
                          Create New Account <h6>Or </h6>
                          <Link to="/singup" className="link-danger">
                            <h6>Login</h6>{" "}
                          </Link>
                        </h1>
                        <div className="form-outline mb-4">
                          <label className="form-label font-change " htmlFor="typeEmailX-2">
                            Your Name
                          </label>
                          <input
                            type="email"
                            id="typeNameX-2"
                            className="form-control form-control-lg"
                            onChange={(event) =>
                              setValues((prev) => ({
                                ...prev,
                                name: event.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label font-change " htmlFor="typeEmailX-2">
                            Email address
                          </label>
                          <input
                            type="email"
                            id="typeEmailX-2"
                            className="form-control form-control-lg"
                            onChange={(event) =>
                              setValues((prev) => ({
                                ...prev,
                                email: event.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label font-change "
                            htmlFor="typePasswordX-2"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="typePasswordX-2"
                            className="form-control form-control-lg"
                            onChange={(event) =>
                              setValues((prev) => ({
                                ...prev,
                                password: event.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label font-change "
                            htmlFor="typePasswordX-2"
                          >
                            {" "}
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="typeConfirmPasswordX-2"
                            className="form-control form-control-lg"
                            onChange={(event) =>
                              setValues((prev) => ({
                                ...prev,
                                ConfirmPassword: event.target.value,
                              }))
                            }
                          />
                        </div>
                        {/* Checkbox */}
                        <div className="form-check d-flex justify-content-between mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="form1Example3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form1Example3"
                          >
                            {" "}
                            Remember me{" "}
                          </label>
                          <Link to="/Reset" className="link-danger">
                            Forgot your password?
                          </Link>
                        </div>
                        <button
                          onClick={handlesubmit}
                          className="btn btn-danger btn-lg btn-block form-control"
                          type="submit"
                          disabled={submitButtonDisabled}
                        >
                          Create New Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singup;
