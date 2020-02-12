import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import MarketingList from './components/MarketingList'
import MarketSurvey from './components/MarketSurvey'


function App() {
  return (
    <BrowserRouter>
    
      <SignUp />
      <LogIn />
      <MarketingList />
      <MarketSurvey />

    </BrowserRouter>
  );
}

export default App;
