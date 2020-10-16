import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div className="App">
      <Header/>
      
      <div className="Main-Container">
        <Nav/>
        <Main/>
      </div>
      
      <Footer/>  
    </div>
  );
}

export default App;
