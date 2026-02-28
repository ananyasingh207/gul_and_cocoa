import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="boutique-footer">
            <div className="footer-divider"></div>
            <div className="footer-container">
                <div className="footer-brand">
                    <h2><img src="images/logo.png" alt="" className="footer-logo-img" />Gul &amp; Cocoa</h2>
                    <p>Where tradition meets tenderness, and every bite feels like home.</p>
                    <div className="footer-socials">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/menu">Menu &amp; Pricing</Link></li>
                        <li><Link to="/about">Our Story</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-hours">
                    <h3>Opening Hours</h3>
                    <p>Mon - Fri: 8am - 10pm</p>
                    <p>Saturday: 9am - 11pm</p>
                    <p>Sunday: 9am - 9pm</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Gul &amp; Cocoa. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
