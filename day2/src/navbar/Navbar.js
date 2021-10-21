import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        <header>
        <div className="navbar-container">
            
            <img src ="./AMlogo.png" alt = "am-logo" className="am-header-logo"/>
            
            <nav>
                <ul className="navbar-lists">
                    <li className="nav-list"> <Link className="navbar-list-link">PRODUCTS & SERVICES</Link></li>
                    <li className="nav-list"> <Link className="navbar-list-link">CUSTOMER CASES</Link></li>
                    <li className="nav-list"> <Link className="navbar-list-link">COMPANY</Link></li>
                    <li className="nav-list"><button className="nav-btn">BOOK A DEMO</button></li>

                </ul>
            </nav>
           
        </div>
        </header>
    )
}
export default Navbar

export const Navigation = () =>{
    return(
        <div className="nav-routing-container">
        <span>Home</span>
        <img src="./arrow-right.png" alt = ""/>
        <span>Pages</span>
        <img src="./arrow-right.png" alt = ""/>
        <span>Electronics</span>
        </div>
    )
}
