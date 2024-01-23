import React from "react"

export default function navbar(){



    return(  
        <nav className="navbar">
            {/* Left Navbar Start */}
            <ul className="left-nav">
            <img src="/images/Bearpaw-Logo-236.jpg" alt="" />
                <li><a href="#">MEN</a></li>
                <li><a href="#">WOMEN</a></li>
                <li><a href="#">KIDS</a></li>
                <li><a href="#">SALE</a></li>
                <li><a href="#">GIFT CARDS</a></li>
                <li><a href="#">BEARPAW CARES</a></li>
            </ul>
            {/* Left Navbar End */}


            {/* Right Navbar Start */}
            <ul className="right-nav">
                <li className="nav-search"><input placeholder=" Search" type="search"/></li>
                <li> <i class="medium material-icons">account_circle</i> </li>
                <li> <i class="medium material-icons">favorite_border</i> </li>
                <li> <i class="medium material-icons">shop</i> </li>
            </ul>
            {/* Right Navbar End */}
        </nav>
     
     
     
     
        )    
}