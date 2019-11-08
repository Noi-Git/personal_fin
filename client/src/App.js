import React from 'react';
import './App.css';
import Landing from './components/pages/landing';
import Date from './components/pages/date';
import Login from './components/pages/login';
import Main from './components/pages/main';
import Details from './components/pages/details';
import Nav from './components/pages/nav';

function App() {
  return (
    <div>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
