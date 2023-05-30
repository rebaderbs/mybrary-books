import { React } from "react";

function Header () {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="books.png" alt="Mybrary Books" width="75" height="75" />
                </a>

                <div class="nav justify-content-end" id="navbarToggleExternalContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;