import React,{useState, createContext, useContext} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'
import { userContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Ride Chai</Navbar.Brand>

            <Nav className="mr-auto">
                <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                <Nav.Link><Link to="/destination"> Destination </Link></Nav.Link>
                <Nav.Link><Link to="/login"> Login </Link></Nav.Link>
                <Nav.Link> User: {loggedInUser.name} </Nav.Link>
            </Nav>
        </Navbar>

    );
};

export default Header;