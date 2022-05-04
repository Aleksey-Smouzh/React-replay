import React from "react";
import header from "./Header.module.css";
import Menu from "./Menu/Menu";

function Header(props) {
  return (
    <div className={header.container}>
      <h1>Wikipedia </h1>

      <h2> {props.data.site_test}</h2>
      <Menu nav={props.data.nav} />
    </div>
  );
}

export default Header;
