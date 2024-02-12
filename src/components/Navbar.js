import React from "react"

export default function navbar(){

    return(  
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="../../public/images/Bearpaw-Logo.jpg" alt="Logo" />
                </a>
            </div>
            {/* left navbar items 👇*/}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-2">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >WOMAN</a>
                </li>
                <ul className="dropdown-menu">
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >MAN</a>
                </li>


                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >KIDS</a>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >SALE</a>
                </li>   
                
                             <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" >GIFT CARDS</a>
                </li>     
                
                           <li className="nav-item dropdown">
                    <a className="nav-link" href="#">BEARPAW CARES</a>
                </li>


            </ul>
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