import { React } from "react";
import { NavLink } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./Login"

function Header () {
    return (
        <Router>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" href="#">
                        <img class="logo" src="logo.png" alt="Mybrary Books" width="75" height="75" />
                    </NavLink>

                    <div class="nav justify-content-end" id="navbarToggleExternalContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/login" class="nav-link">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/signup" class="nav-link">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/login' element={<Login/>} />
            </Routes>
        </Router>
    );
}

export default Header;