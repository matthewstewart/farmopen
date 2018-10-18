import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProfilePage from './pages/ProfilePage';

class Routes extends Component {
  render() {
    const landingPage = () => {
      return ( <LandingPage {...this.props} /> );
    };
    const loginPage = () => {
      return ( <Login {...this.props} /> );
    };
    const signupPage = () => {
      return ( <Signup {...this.props} /> );
    };
    const profilePage = () => {
      return ( <ProfilePage {...this.props} /> );
    };
    return (
      <main>
        <Switch>
          <Route exact path='/' render={landingPage} />
          <Route exact path='/login' render={loginPage} />
          <Route exact path='/signup' render={signupPage} />
          <Route exact path='/profile' render={profilePage} />
        </Switch>
      </main>
    );
  }
}

export default Routes;