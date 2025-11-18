import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contactus.jsx";
import Portfolio from "./pages/portfolio.jsx";
import NavBar from "./Navbar.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/portfolio" element={<Portfolio />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App
