import React from 'react';
import { Link } from 'react-router-dom';
import student from '../../images/student.jpg';
import './Header.css';

const Header = () => {
    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row d-flex align-items-center justify-content-evenly ">
                            <div className="col-md-5 pt-5 order-2 order-lg-1 flex-column ">
                                <h2>Welcome to Students Portal</h2>
                                <h4 className="text-secondary">We have the best Student's portal</h4>
                                <div className="mt-3">
                                    <Link to="/addStudent" className="btn btn-success">Add Student</Link>
                                </div>
                            </div>
                            <div className="col-md-5 pt-5 order-1 order-lg-2">
                                <img className="container-fluid" src={student} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;