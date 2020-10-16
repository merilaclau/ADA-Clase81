import React, { useState } from 'react';
import './Main.scss';
import cats from './img/cats.png';
import cat from './img/cat.png';

const Main = () => {
    const [displayCat, setDisplayCat] = useState(false);  

    return (
      <article className="main">
          <button 
            type="button"
            onClick={() => setDisplayCat(!displayCat)}>
            TOCAME!
          </button>
          {
              displayCat ? 
              <img alt="cats playing" src={cats}/>
              :
              <img className="sadCat" alt="sad cat" src={cat}/>
          }
      </article>
    );
  }
  
export default Main;