import { React } from "react";
import { NavLink } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Userfront from "@userfront/react";
import Dashboard from "../UserPage/Dashboard";
import { Route, Routes } from 'react-router-dom';


// Userfront.init("pn458jpb");

// const SignupForm = Userfront.build({
//   toolId: "mlnrkml"
// });

// const LoginForm = Userfront.build({
//   toolId: "nkarbna"
// });

function MainHeader () {
    return (
<>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="#">
                        <img className="logo" src="logo.png" alt="Mybrary Books" width="75" height="75" />
                    </NavLink>

                    <div className="nav justify-content-end" id="navbarToggleExternalContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <Routes>
                <Route path='/login' element={<LoginForm/>} />
                <Route path='/signup' element={<SignupForm/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
            </Routes> */}
            </>
    );
}

export default MainHeader;