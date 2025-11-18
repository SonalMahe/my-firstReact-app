import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <ul style={{
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: "20px",
                    alignItems: "center",
                    padding: 5
                }}>
                    <li><Link to="/">Home</Link></li>
                    <span>|</span>
                    <li><Link to="/about">About Us</Link></li>
                    <span>|</span>
                    <li><Link to="/contact">Contact US</Link></li>
                    <span>|</span>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;