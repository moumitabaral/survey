import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../assets/img/logo.png'


export default function SignUp (){
  return(
    <div>
      <div className="container mt-5" >
      <img src={Logo} className="img-fluid mx-auto d-block" alt="logo" width="230" height="auto"  />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 pt-5 pr-4">
          <h3 className="text-center my-3 p-4">SignUp</h3>
          <form>
            <div className="form-group row">
              <label htmlFor="inputName1" className="col-sm-3 col-form-label">Name:</label>
              <div className="col-sm-9">
                <input type="text" className="form-control " id="inputName1" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputName2" className="col-sm-3 col-form-label">Designation:</label>
              <div className="col-sm-9">
                <input type="text" className="form-control " id="inputName2" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputNumber1" className="col-sm-3 col-form-label">Phone no.:</label>
              <div className="col-sm-9">
                <input type="text" className="form-control " id="inputNumber1"  />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Email:</label>
              <div className="col-sm-9">
                <input type="email"  className="form-control " id="staticEmail" placeholder="email@example.com" />
                <small id="staticEmail" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputName3" className="col-sm-3 col-form-label ">Username/Id:</label>
              <div className="col-sm-9">
                <input type="text" className="form-control " id="inputName3" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword" className="col-sm-3 col-form-label ">Password:</label>
              <div className="col-sm-9">
                <input type="password" className="form-control " id="inputPassword" />
               
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword1" className="col-sm-3 col-form-label ">ConfirmPassword:</label>
              <div className="col-sm-9">
                <input type="password" className="form-control" id="inputPassword1" placeholder="Re-type Password" /> 
              </div>
            </div>
            <div className="form-row text-center mb-5 p-5">
              <div className="col-12">
                  <button type="submit" className="btn btn-outline-primary">SignUp</button>
                  <small className="form-text text-muted">Registered? <Link to="/">LogIn</Link></small>
              </div>
           </div>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div> 
    </div>

    </div>
  )
}