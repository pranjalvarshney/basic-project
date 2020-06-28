import React from 'react'
import { Navbar , Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand><Link to="/">React-App</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link className="nav-link" to="/signin">Signin</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/create">Create</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar