import { NavLink } from 'react-router-dom'
import React from 'react'

function Header3a() {
  return (
    <div>
        <nav>
            <ul><NavLink to="/">Home</NavLink></ul>
            <ul><NavLink to="/about">About</NavLink></ul>
            <ul><NavLink to="/category">Category</NavLink></ul>
        </nav>
        </div>
  )
}

export default Header3a
