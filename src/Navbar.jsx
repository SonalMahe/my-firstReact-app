import { Link } from "react-router-dom";
import "./navigation.css"

function NavBar() {
    return (
        <>
            <nav>
                <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <span></span>
                    <li><Link to="/about">About Us</Link></li>
                    <span></span>
                    <li><Link to="/contact">Contact US</Link></li>
                    <span></span>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                     <span></span>
                    <li><Link to="/popup">Popup</Link></li>
                    
               {/*}  <li><Link to="/onchange">On change</Link></li>
                     <span></span>
                    <li><Link to="/car">Car</Link></li>
                     <span></span>
                    <li><Link to="/array">Arrays</Link></li> */}
                </ul>
            </nav>
        </>
    )
}

export default NavBar;