import React from "react"

export default function navbar(){



    return(  
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="../assets/Bearpaw-Logo-236.jpg" alt="Logo" />
                </a>
            </div>
            {/* eft navbar items 👇*/}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >WOMAN</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >MAN</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >KIDS</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >SALE</a>
                </li>                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >GIFT CARDS</a>
                </li>                <li className="nav-item dropdown">
                    <a className="nav-link" href="#">BEARPAW CARES</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                {/* replace the btn with a  logo like BP 👇*/}
                <button className="btn" type="submit"></button>
                <input className="form-control me-2" type="search" placeholder="Search" />
            </form>
            {/* right navbar items👇 */}
            <ul>
                <li className="nav-item"><i class="bi bi-person-circle"></i></li>
                <li className="nav-item"><i class="bi bi-heart-fill"></i></li>
                {/* add a number icon to this logo like the BP 👇 */}
                <li className="nav-item"><i class="bi bi-bag-fill"></i></li>
            </ul>
        </nav>
     
     
     
     
        )    
}