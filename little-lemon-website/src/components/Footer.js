import React from "react";
import logo from '../images/logo.svg';

const Footer = () => {
    return (
        <footer>
            <section>

                <div>
                    <img src={logo} alt="logo"/>
                    <p>We are a family owned Mediterraneran restaurant, 
                    focused on traditional recipes served with a mondern twist.</p>
                </div>

                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Towncity, World</li>
                        <li>Phone: <br/> 123456789</li>
                        <li>Email: <br/> littlelemon@email.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">X</a></li>
                        <li><a href="/">TikTok</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    );
};

export default Footer;