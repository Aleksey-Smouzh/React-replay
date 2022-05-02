import React from 'react'
import main from "./Main.module.css"
import article from "../../Data/articles.json"
function Main() {
    return (
        <div className={main.container}>
            {article.map((item, index) =>
                <section>
                    <h2 key={index.id}>{item.title}</h2>
                    <div key={index.id}>{item.body}</div>
                </section>)}
        </div>
    )
}

export default Main