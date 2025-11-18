import { Link } from "react-router-dom";
import "./navigation.css"

function NavBar() {
    return (
        <>
            <nav>
                <ul class="nav">
                    <li><Link to="/">Home</Link></li>
                    <span></span>
                    <li><Link to="/about">About Us</Link></li>
                    <span></span>
                    <li><Link to="/contact">Contact US</Link></li>
                    <span></span>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;