import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import category from "./Category3a.module.css"
function Category3a() {
    let url = useLocation()
    console.log(url)
  return (
    <div className={category.container}>
        <h1>Category</h1>
       <NavLink to={`${url.pathname}/laptop`}>Laptop</NavLink>
       <NavLink to={`${url.pathname}/monitor`}>Monitor</NavLink>
       <NavLink to={`${url.pathname}/phones`}>Phones</NavLink>


        
        
       </div>
  )
}

export default Category3a