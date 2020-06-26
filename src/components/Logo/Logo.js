import React from "react";
import logo from "../../assets/img/logo.png";
import "./Logo.css";

const Logo = (props) => (
  <div className="logo" style={{ height: props.height }}>
    <img src={logo} alt="" />
  </div>
);

export default Logo;
