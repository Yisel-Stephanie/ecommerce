
import React from "react";
import logo from "../NavBar/logoHappyPet.jpg";
import './Navbar.css';
import { CardWidget } from "../CardWidget/CardWidget";
import { faDog, faCat, faFish, faDove, faHorse, faShoppingCart } from '@fortawesome/free-solid-svg-icons' //solid

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light  container">

                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            {/* className="nav-link dropdown-toggle" */}
                            <a href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <CardWidget iconito={faDog}></CardWidget> <br /> Perros
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <CardWidget iconito={faCat}></CardWidget> <br /> Gatos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <CardWidget iconito={faFish}></CardWidget> <br /> Peces
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <CardWidget iconito={faHorse}></CardWidget> <br /> Caballos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <CardWidget iconito={faDove}></CardWidget> <br /> Aves
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div><CardWidget iconito={faShoppingCart}></CardWidget></div>
            </nav>
            <hr />

        </>
    )
};

export default Navbar;