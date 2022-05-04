import React from "react";
import { NavLink } from "react-router-dom";
function Header3() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Main</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header3;
