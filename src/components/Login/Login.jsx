import React from 'react'
import logo from '../../images/logoc.png'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import './login.css'
function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
   
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, SetsubmitButtonDisabled] = useState(false);
  const handlesubmit = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Some Filed is Empty");
      return;
    }
    setErrorMsg("All filed is fill ");
    SetsubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then( (res) => {
        SetsubmitButtonDisabled(false);
      
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
      
          <section className="vh-100" style={{ backgroundColor: '#f9fafb' }}>
          
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className='text-center my-4'>
                      <img src={logo} style={{ width: '300px' }} alt="My Logo" />
                      
                    </div>
                    <h1>{setErrorMsg}</h1>
                  <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                    <div className="card-body p-5 text-start">
                        <h1  className="mb-5 text-center font-change ">Login to your workspace <h5> 
                          </h5><Link to="/singup" className="link-danger"><h6>create new account</h6> </Link></h1>
                        
                      <div className="form-outline mb-4">
                        <label className="form-label font-change" htmlFor="typeEmailX-2">Email address</label>
                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" required="email"
                          onChange={(event) =>
                            setValues((prev) => ({
                              ...prev,
                              email: event.target.value,
                            }))} />
                      
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label font-change" htmlFor="typePasswordX-2">Password</label>
                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg"
                          onChange={(event) =>
                            setValues((prev) => ({
                              ...prev,
                              password: event.target.value,
                            }))} />
                      
                      </div>
                      {/* Checkbox */}
                      <div className="form-check d-flex justify-content-between mb-4">
                        <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                        <label className="form-check-label ml-2 block text-sm text-gray-900" htmlFor="form1Example3"> Remember me </label>
                        <Link to="/Reset"  className="link-danger">Forgot your password?</Link>
                    
                      </div>
                      <button className="btn btn-danger btn-lg btn-block form-control" type="submit" onClick={handlesubmit} disagit bled={submitButtonDisabled} >Sign in</button>
                    
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
export default Login;

