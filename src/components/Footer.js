import React from 'react';
import teamLogo from './Pictures/logo.jpg';
import './Footer.css';

function Footer() {
    
    return(
    <div className="footer-wrapper">
        <div className="footer">
            <img className="logo" src={teamLogo}/>
            <ul className="social">
                <li><i class="fab fa-facebook-f fa-3x"></i></li>
                <li><i class="fab fa-instagram fa-3x"></i></li>
            </ul>
        </div>
        <div class="copy">Copyright-Golux Technologies 2021 - Nikola Zdrale</div>
    </div>   
    )
}

export default Footer;