import React, { useState } from 'react'
import { MenuItems } from "./MenuItems"
import "./Navbar.css"
import { Button } from "../Button"

function Navbar() {

    const [clicked, setClicked] = useState(false);



    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">
                Cast 4 Aurudu
            </h1>
            <div className="menu-icon" onClick={
                () => setClicked(!clicked)
            }>
                <i className={
                    clicked ? "fas fa-times" : "fas fa-bars"
                }></i>

            </div>
            <ul className={clicked ? "nav-menu-active" : "nav-menu"}>
                {
                    MenuItems.map(
                        (item, index) => {
                            return <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
                        }
                    )
                }

            </ul>
            <Button>Sign in</Button>

        </nav >
    )
}

export default Navbar;
