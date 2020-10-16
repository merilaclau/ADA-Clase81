import React, { useState } from 'react';
import './Nav.scss';

const Nav = () => {
  
  const [inputText, setInputText] = useState("Escribí algo!");
  
  return (
      <nav className="nav">
          <a href="#">Miau</a>
          <a href="#">Prrr</a>
          <a href="#">Miii</a>
          <a href="#">Roar</a>
          <input type="text" onChange={e => setInputText(e.target.value)}></input>
          <span> {inputText} </span>
      </nav>
    );
  }
  
export default Nav;