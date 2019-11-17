import React from 'react';
import './App.css';

// import Login from './components/layout/login';
import Navbar from './components/layout/Navbar';
import Totals from './components/main_page/Totals';
import AddMain from './components/add_page/AddMain';

function App() {
  return (
    <div>
      <Navbar
        i_home="fa fa-home"
        i_info="fa fa-info"
        i_signout="fa fa-sign-out"
      />

      <Totals />
      <AddMain />
    </div>
  );
}

export default App;
