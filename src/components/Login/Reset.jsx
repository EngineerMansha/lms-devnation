import React from 'react';
import './login.css';
import logo from '../../images/logoc.png'
import { Link } from 'react-router-dom';
const Reset = () => {
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
                  <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                    <div className="card-body p-5 text-start">
                                                <h1 className="mb-5 text-center font-change ">Reset Your Password <h5> 
                                                <h6>Already have an account? </h6>
                          </h5><Link to="/" className="link-danger"><h6>Log In</h6> </Link></h1>
                        
                      <div className="form-outline mb-4">
                        <label className="form-label font-change" htmlFor="typeEmailX-2">Email address</label>
                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" required="email"
                        //   onChange={(event) =>
                        //     setValues((prev) => ({
                        //       ...prev,
                        //       email: event.target.value,
                        //     }))}
                                                    />
                      
                      </div>
                     
                      <button className="btn btn-danger btn-lg btn-block form-control" type="submit">Reset Password</button>
                    
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

    )

    
}

export default Reset