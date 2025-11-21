import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contactus.jsx";
import Portfolio from "./pages/portfolio.jsx";
import PopUp from "./pages/PopUp.jsx";
import NavBar from "./Navbar.jsx";

import OnChange from "./pages/OnChange.jsx"
import Car from "./pages/CarObject.jsx"
import Arrays from "./pages/array.jsx"

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
                    <Route path="/popUp" element={<popUp />}></Route>
                    
                    {/*}  <Route path="/onchange" element={<OnChange />}></Route> (this is for my ref)
                      <Route path="/car" element={<Car />}></Route>
                      <Route path="/array" element={<Arrays />}></Route> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App
