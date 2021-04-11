import React, { useState } from 'react'
import "./Navbar.css"
import { Button } from "../Button"
import { Link } from 'react-router-dom';
import logo from "../../assests/cast4logof.png"
import { signout } from '../../helpers/auth';
import { ToastContainer, toast } from 'react-toastify';

function SignOutNavbar() {

    const [clicked, setClicked] = useState(false);

    return (
        <nav className="NavbarItems">
            <Link  to="/">
            <img className="navbar-logo" src={logo} alt="" />
            </Link>
            <div className="menu-icon" onClick={
                () => setClicked(!clicked)
            }>
                <i className={
                    clicked ? "fas fa-times" : "fas fa-bars"
                }></i>

            </div>
            <ul className={clicked ? "nav-menu-active" : "nav-menu"}>
                {
                            <dev>
                            <button onClick={() => {
                                window.location.href='/home'
                            }} className="nav-links">Home
                            </button>

                            <button onClick={() => {
                                signout(() => {
                                window.location.href='/'
                                toast.error('Signout Successfully');
                                });
                            }} className="nav-links-mobile">Sign Out
                            </button>
                            </dev>
                        
                }

            </ul>
            <Button
            onClick={() => {
                    signout(() => {
                      toast.error('Signout Successfully');
                      window.location.href='/'
                    });
                  }}>Sign Out</Button>

        </nav >
    )
}

export default SignOutNavbar;
