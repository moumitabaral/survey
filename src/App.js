import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import MarketingList from './components/MarketingList'
import MarketSurvey from './components/MarketSurvey'
import Header from './components/layout/Header'
import Profile from './components/Profile'




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/" exact={true} component={MarketingList} />
        <Route path="/signup" exact={true}  component={SignUp} />
        <Route path="/login"  exact={true} component={LogIn} />
        <Route path="/marketing-list" exact={true} component={MarketingList} />
        <Route path="/survey-form" exact={true} component={MarketSurvey} />
        <Route path="/profile" exact={true} component={Profile} />
      </Switch>

      {/* <SignUp />
      <LogIn />
      <MarketingList />
      <MarketSurvey /> */}

    </BrowserRouter>
  );
}

export default App;
