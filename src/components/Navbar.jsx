import { Link } from 'react-router-dom'

function Navbar({ noBorder }) {
    return (
        <header className="main-header" style={{ borderBottom: noBorder ? 'none' : '' }}>
            <Link to="/" className="logo">
                <img src="images/logo.png" alt="Gul & Cocoa" className="logo-img" />
                Gul &amp; Cocoa
            </Link>

            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </header>
    )
}

export default Navbar
