import React from 'react'
import { useLocation } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import users3 from "./Users3.module.css"
function Users3() {
    let url= useLocation();
    console.log(url)
  return (
    <div className={users3.container}>
        
        <h1> Users</h1>
            
          <ul>
              <li><NavLink to={`${url.pathname}/ivanov`}>Ivanov</NavLink></li>
              <li><NavLink to={`${url.pathname}/petrov`}>Petrovo</NavLink></li>
              </ul>  
            
            
            
           
        
        
        </div>
  )
}

export default Users3