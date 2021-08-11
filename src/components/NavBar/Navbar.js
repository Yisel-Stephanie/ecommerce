
import React from "react";
import { ItemList } from "../ItemListContainer/ItemList";
import logo from "../NavBar/logoHappyPet.jpg";
import './Navbar.css'

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
                    <ItemList></ItemList>
                </div>

            </nav>
            <hr />

        </>
    )
};

export default Navbar;