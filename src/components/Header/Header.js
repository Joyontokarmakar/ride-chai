import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand href="#home" className="club_name">JK Premier Club</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <marquee direction="left">Add Player From the Pending Player list to Build Your Own Club's Team.</marquee>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;