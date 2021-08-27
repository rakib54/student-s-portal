import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <NavLink to="/" className="navbar-brand">Student's Portal</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink activeClassName="menu-active" to="/home" className="nav-link active" aria-current="page" href="#">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="menu-active" to="/addStudent" className="nav-link">Add Student</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="menu-active" to="/contact" className="nav-link">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;