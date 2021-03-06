import React, {useContext} from 'react'
import { Navbar , Nav } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../App'

const NavBar = () => {

    const history = useHistory()
    const { state, dispatch } = useContext(UserContext)
    
    const renderNav = () =>{
        if(state){
            return[
                    <Nav.Item key={0}>
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </Nav.Item>,
                    <Nav.Item key={1}>
                        <Link className="nav-link" to="/create">Create</Link>
                    </Nav.Item>,
                    <Nav.Item key={2}>
                        <button className="btn btn-dark " onClick={()=>{
                            localStorage.clear()
                            dispatch({type: "CLEAR"})
                            history.push("/signin")
                        }}>Logout</button>
                    </Nav.Item>
                    
            ]
        }else{
            return[
                    <Nav.Item key={0}>
                        <Link className="nav-link" to="/signin">Signin</Link>
                    </Nav.Item>,
                    <Nav.Item key={1}>
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </Nav.Item>
            ]
        }
    }
    return(
        

        <Navbar bg="dark" variant="dark" expand="lg" className="py-4">
            <Navbar.Brand><Link to={state?"/": "/signin"}>React-App</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {renderNav()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar