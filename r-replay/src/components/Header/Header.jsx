
import React from 'react'
import header from "./Header.module.css";
import Menu from './Menu/Menu';

function Header() {
  return (
    <div className={header.container}>
      <h1>Wikipedia </h1>
      <Menu></Menu>
    </div>
  )
}

export default Header