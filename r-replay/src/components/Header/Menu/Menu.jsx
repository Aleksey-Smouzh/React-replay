import React from "react";
import menubar from "./Menu.module.css";
function Menu(props) {
    let data = props.nav;
    const listItem = data.map((item, flags) => {
        return (
            <a key={flags} href={item.link}>
                {item.text}
            </a>
        );
    });

    return (
        <div className={menubar.container}>
            <nav>
                <ul className={menubar.lists}>
                    <li className={menubar.list}>{listItem}</li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
