import React from 'react'
import Goods from '../Goods/Goods'
import footer from "./Footer.module.css"
import img1 from "../../Image/image5.png";
import img2 from "../../Image/image7.png";
import img3 from "../../Image/image8.png";




const goods = [
    { "title": "Apple", "cost": 330, "img": img1},
    { "title": "Banana", "cost": 360, "img": img2},
    { "title": "Melon", "cost": 310, "img": img3}
  ]



function Footer(props) {
    return (
        <div className={footer.container}>
         {goods.map(item =><Goods title={item.title} cost={item.cost} iag={item.img}/>)}   
        
        <Goods />
        
        </div>
    )
}

export default Footer