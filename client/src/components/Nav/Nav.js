import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {

    return (
        <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
            <div className="row">
                <div className="col">
                    <Link to={'/login'} className="nav-link"><i className="fa fa-sign-in"></i></Link>
                </div>
                <div className="col">
                    <Link to={'/'} className="nav-link"><i className="fa fa-home"></i></Link>
                </div>
                <div className="col">
                    <Link to={'/new'} className="nav-link"><i className="fa fa-plus"></i></Link>
                </div>
                <div className="col">
                    <Link to={'/events'} className="nav-link"><i className="fa fa-calendar-o"></i></Link>
                </div>
                <div className="col">
                    <Link to={'/current'} className="nav-link"><i className="fa fa-line-chart"></i></Link>
                </div>
                <div className="col">
                    <Link to={'/testing'} className="nav-link"><i className="fa fa-map-marker"></i></Link>
                </div>
            </div>
        </nav>


    )
}

export default Nav;