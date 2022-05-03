import React from 'react'
import main from "./Main.module.css"
import article from "../../Data/articles.json"
function Main(props) {
    return (
        <div className={main.container}>
            {article.map((item, index) => 
                <section>
  <h2 key={index.id}>{item.title}</h2>
   <div><p key={index.id}>{item.body}</p></div>
  
                   
                </section>)}
        </div>
    )
}

export default Main