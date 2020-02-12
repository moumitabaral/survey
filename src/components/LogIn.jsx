import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.png'

export default function LogIn (){
  return(
    <div>
    <div className="container mt-5 p-4">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 mt-5 p-5 bg-light">
          <img src={Logo} className="img-fluid mx-auto d-block mb-5" alt="logo" width="230" height="auto" />
          <h3 className="text-center  mb-5">LogIn</h3>
          <form>
            <div className="form-group row">
              <label htmlFor="inputName1" className="col-sm-2 col-form-label ">Username/id:</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" id="inputName1" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label ">Password:</label>
              <div className="col-sm-9">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
            <div className="form-row text-center mb-5 p-2">
              <div className="col-12">
                  <button type="submit" className="btn btn-outline-dark shadow">SignUp</button>
                  <small className="form-text text-muted">Haven't done your registration yet? <Link to="/">SignUp</Link></small>
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