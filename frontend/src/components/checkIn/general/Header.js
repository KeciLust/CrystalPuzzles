import React from "react";
import './Header.css';
import logo from '../../../img/logo/logo.png';

function Header (){
    return (
        <>
        <div className="header">
          <img src={logo} alt="Cristal Puzzles" className="header_logo" />
        </div>
        </>
    )
}

export default Header;
