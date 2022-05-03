import React from 'react'
import goods from "./Goods.module.css"
function Goods(props) {
  
    return (
        <div className={goods.container}>
<h3 className={goods.titles}>{props.title}</h3>
<span className={goods.costs}>{props.cost} cost</span>
<div className={goods.images}><img src={props.iag} alt="goods" /></div>
 </div>
    )
}

export default Goods