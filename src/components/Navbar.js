import React from "react"
// import SignIn from "./SignIn"
export default function navbar(){

    return(  
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="../../public/images/Bearpaw-Logo.jpg" alt="Logo" />
                </a>
            </div>
            {/* left navbar items 👇*/}
            {/* Make dropdowns functional with foundation */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-2">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >WOMEN</a>
                    <ul className="dropdown-menu">
                        <li><a href=""><b>New Arrives</b></a></li>
                        <li><a href=""><b>Exclusives</b></a></li>
                        <li><a href="">Boots</a></li>
                        <li><a href="">Clogs</a></li>
                        <li><a href="">Slippers</a></li>
                        <li><a href="">Sandals</a></li>
                        <li><a href="">Shoes</a></li>
                        <li><a href="">Heels</a></li>
                        <li><a href=""><b>Sale</b></a></li>
                </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >MEN</a>
                    <ul className="dropdown-menu">
                        <li><a href=""><b>New Arrives</b></a></li>
                        <li><a href="">Boots</a></li>
                        <li><a href="">Clogs</a></li>
                        <li><a href="">Slippers</a></li>
                        <li><a href="">Hikers</a></li>
                        <li><a href="">Shoes</a></li>
                        <li><a href="">Accessories</a></li>
                        <li><a href=""><b>Sale</b></a></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >KIDS</a>
                    <ul className="dropdown-menu">
                        <li><a href=""><b>New Arrives</b></a></li>
                        <li><a href="">Boots</a></li>
                        <li><a href="">Slippers</a></li>
                        <li><a href="">Sandals</a></li>
                        <li><a href=""><b>Sale</b></a></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >SALE</a>
                    <ul className="dropdown-menu">
                        <li><a href="">Women</a></li>
                        <li><a href="">Men</a></li>
                        <li><a href="">Kids</a></li>
                        <li><a href="">Closeouts</a></li>
                    </ul>
                </li>

                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >GIFT CARDS</a>
                    <ul className="dropdown-menu">
                        <li><a href="">Gift cards</a></li>
                        <li><a href="">Valentine's Guide</a></li>
                    </ul>     
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">BEARPAW CARES</a>
                </li>                    
            </ul>
            {/* searchBar👇 */}
            <form className="d-flex" role="search">
                <button className="btn" type="submit"></button>
                <input className="form-control me-2" type="search" placeholder="Search" />
            </form>
            {/* right navbar items👇 */}
            {/* +++++ make the icons look bigger */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-5">
                <li className="nav-item"><a className="nav-link me-3 me-lg-0" href="#"><i class=" bi bi-person-circle"></i></a> </li>
                <li className="nav-item"><a className="nav-link me-3 me-lg-0" href="#"><i class=" bi bi-heart-fill"></i></a> </li>
                {/* add a number icon to this logo like the BP 👇 */}
                <li className="nav-item"><a className="nav-link me-3 me-lg-0" href="#"><i class=" bi bi-bag-fill"></i></a> </li>
            </ul>
        </nav>
        )    
}