import React,{useState, createContext, useContext} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'
import { userContext } from '../../App';
import logo from './ride_chai.png';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <Navbar bg="light" variant="light">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <Navbar.Brand><Link to="/home"><img src={logo} alt="" className="logo_img"/></Link></Navbar.Brand>
                    <Nav>
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/destination"> Destination </Link></Nav.Link>
                        <Nav.Link><Link to="/login"> Login </Link></Nav.Link>
                        <Nav.Link className="user_info"> <img src={loggedInUser.photoURL} alt="" className="user_img"/> {loggedInUser.name} </Nav.Link>
                    </Nav>
                </div>
            </div>
        </Navbar>
    );
};

export default Header;