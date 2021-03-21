import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright © All Rights Reserved By <Link to="https://joyontokarmakar.netlify.app/">Joyonto Karmakar</Link> ● 2021</p>
        </div>
    );
};

export default Footer;