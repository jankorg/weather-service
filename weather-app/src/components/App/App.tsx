import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Navbar from '../NavBar/NavBar';
import Charts from '../Charts/Charts';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div className="row">
        <div className="side">
         
        </div>
        <div className="main">
          <Charts/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
