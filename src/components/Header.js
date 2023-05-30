import { React } from "react";
import { NavLink } from "react-bootstrap";

function Header () {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <NavLink class="navbar-brand" href="#">
                    <img class="logo" src="logo.png" alt="Mybrary Books" width="75" height="75" />
                </NavLink>

                <div class="nav justify-content-end" id="navbarToggleExternalContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink class="nav-link" href="#">Login</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" href="#">Sign Up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;