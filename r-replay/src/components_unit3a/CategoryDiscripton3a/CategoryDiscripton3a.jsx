import React from 'react'
import { NavLink } from 'react-router-dom'
import {useParams} from 'react-router'

function CategoryDiscripton3a() {
    let {categoryName} = useParams()
  return (
    <div>
       
        <NavLink to="/category">go Back</NavLink>
        <h1>Category: {categoryName}</h1>
        </div>
  )
}

export default CategoryDiscripton3a