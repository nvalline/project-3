import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                    COVID-19 TRACKER
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login/SignUp</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/new">New Event</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/events">My Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/current">Current Data</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/testing">Testing Sites</a>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}

export default Header;