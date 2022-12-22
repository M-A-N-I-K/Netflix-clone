import React, { useState, useEffect } from 'react'
import "./Navbar.css"

function Navbar() {
    const [show, handleShow] = useState([false]);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", null);
        }
    }, [])
    return (
        <div className={`navbar ${show && "navbar__black"}`} >
            <img src="https://www.img2link.com/images/2022/12/22/8f343da16ea6925a124417eb2b58ae6d.png" alt="Netflix Logo" className="navbar__logo" />
            <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="Netflix Logo" className="navbar__avatar" />
        </div >
    )
}

export default Navbar
