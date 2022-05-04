import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components_unit3/Error'
import About3a from './components_unit3a/About3a/About3a'
import Category3a from './components_unit3a/Category3a/Category3a'
import CategoryDiscripton3a from './components_unit3a/CategoryDiscripton3a/CategoryDiscripton3a'
import Footer3a from './components_unit3a/Footer3a/Footer3a'
import Header3a from './components_unit3a/Header3a/Header3a'
import Home3a from './components_unit3a/Home3a/Home3a'
import "./Unit3aapp.css"

function Unit3aapp() {
  return (
    <div className="unit3aapp">
       <BrowserRouter>
       <Header3a/>
       <Routes>
        <Route exact path="/" element={<Home3a/>}/>
        <Route path="/about" element={<About3a/>}/>
        <Route path="/category" element={<Category3a/>}/>
        <Route path="/category/:categoryName" element={<CategoryDiscripton3a/>}/>
        <Route path="*" element={<Error/>}/>
       </Routes>
       <Footer3a/>
       </BrowserRouter> 
        </div>
  )
}

export default Unit3aapp