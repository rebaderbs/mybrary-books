import { React } from "react";
import { NavLink } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Userfront from "@userfront/react";

// const userData = JSON.stringify(Userfront.user, null, 2);

function UserHeader () {
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
                                <Link to="/search" className="nav-link" activeclassname="active" >Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/mybooks" className="nav-link" activeclassname="active" >My Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link" activeclassname="active" >Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={Userfront.logout} className="nav-link">Logout</Link>
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

export default UserHeader;