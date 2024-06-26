import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link,} from "react-router-dom";
import React, { useState } from 'react'

export default function Navbar() {
    const [show, setShow] = useState(false);
  return (
    <div className="nav">
         <div className="inner-content">
          <h1 className="logo">
            ROCK<span>STORE</span>
          </h1>
          <nav className={`${show && "show"}`}>
            <ul>
              <li> 
                <Link to= "/">Home</Link>
              </li>
              <li> 
                <Link to= "/products">Produtos</Link>
              </li>
              <li> 
                <Link to= "/about">Sobre</Link>
              </li>
              <li> 
                <Link to= "/contact">Contatos</Link>
              </li>
              <li> 
                <Link to= "/account">conta</Link>
              </li>
            </ul>
          </nav>
          <div className="navs-icon-container">
            <div className="search-input-container">
              <input type="search" />
              <FontAwesomeIcon icon={faSearch}/>
            </div>
            <button className="shopping-cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <div className="products-count">15</div>
            </button>
            <button className="menu-button"
            onClick={() => setShow(!show)}>
              <FontAwesomeIcon icon={faBars}/>
            </button>

          </div>
         </div>
        </div>
  )
}


