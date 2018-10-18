import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import phatBeetsLogo from '../images/phatbeets.png';

class LandingPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        
        <div className="row mt-3">
          <div className="col col-md-9 col-lg-7 ml-md-auto mr-md-auto text-center">
            <div className="card">
              <div className="card-header bg-dark text-light">
                <h4 className="card-title mb-0">FarmOpen</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Welcome to FarmOpen! This application is currently in development alongside:
                </p>
                <a href="https://www.phatbeetsproduce.org/" target="_blank" rel="noopener noreferrer">
                  <img src={phatBeetsLogo} className="img-fluid" alt="Phat Beets Logo"/>
                </a>
              </div>
              <ul className="list-group list-group-flush">
                <Link 
                  className="list-group-item list-group-item-action bg-success text-light"
                  to="/login"
                >Login</Link>
                <Link 
                  className="list-group-item list-group-item-action bg-primary text-light"
                  to="/signup"
                >Sign Up</Link>
                { this.props.isLoggedIn ? (
                  <button
                    className="list-group-item list-group-item-action bg-secondary text-light"
                    onClick={ this.props.logoutCurrentUser }
                  >Logout</button>
                ) : null }
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default LandingPage;
