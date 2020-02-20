import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src="logo.png" className="img-fluid ml-lg-5" alt="logo" width="180" height="auto" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto" style={{marginRight: '110px'}}>
            <li className="nav-item" >
              <Link className="nav-link " to="/">New Contact</Link>
            </li> 
            <li className="nav-item" >
              <Link className="nav-link " to="/">List</Link>
            </li> 
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle "  to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Mou
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/"><i className="far fa-user"></i>  &nbsp;Profile</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/"><i className="fas fa-cogs"></i>  &nbsp;Settings</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/"><i className="fas fa-sign-out-alt"></i>  &nbsp;Log-out</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    );
  }
}

export default Header;
