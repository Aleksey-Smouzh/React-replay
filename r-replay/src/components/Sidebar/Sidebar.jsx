import React from 'react'
import sidebar from "./Sidebar.module.css"
import articles from "../../Data/articles.json"
function Sidebar() {
  return (
    <div className={sidebar.container}>
      <nav>
        <ul>
          {articles.map((item, index) =>
            <li key={index.id}>
              <a href={item.href}>{item.title}</a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar