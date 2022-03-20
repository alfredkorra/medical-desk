import React, { useState } from "react";
import "./header.css";
import ReactFlagsSelect from "react-flags-select";
import Logo from "../../images/logo.svg"; 

const Header = () => {
  const [selected, setSelected] = useState("IT");
  
  return (
    <div>
    <div className="header-background py-3">
    <div className="container">
    <div className="d-flex justify-content-between">
    <div>
    <img className="logo" src={Logo} alt="logo" />
    </div>
    <div>
    <ReactFlagsSelect
    selected={selected}
    onSelect={(code) => setSelected(code)}
    className="menu-flags"
    fullWidth
    />
    </div>
    </div>
    </div>
    </div>
    </div>
    );
  };
  
  export default Header;
  