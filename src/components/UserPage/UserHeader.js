import { React } from "react";
import { NavLink } from "react-bootstrap";
import Userfront from "@userfront/react";
import { Box, Link } from "@chakra-ui/react";

// const userData = JSON.stringify(Userfront.user, null, 2);

function UserHeader () {
    return (
        <Box bg="primary.light">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="#">
                        <img className="logo" src="logo.png" alt="Mybrary Books" width="75" height="75" />
                    </NavLink>

                    <div className="nav justify-content-end" id="navbarToggleExternalContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link color="secondary.dark" to="/search" className="nav-link">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link color="secondary.dark" to="/mybooks" className="nav-link">My Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link color="secondary.dark" to="/dashboard" className="nav-link" >Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link color="secondary.dark" onClick={Userfront.logout} className="nav-link">Logout</Link>
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
        </Box>
    );
}

export default UserHeader;