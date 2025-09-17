import { Routes, Route, BrowserRouter } from "react-router"
import Home from "../pages/home/home"
import About from "../pages/about/about"
import Contact from "../pages/contact/contact"
import Service from "../pages/service/service"
import NavBtns from "../components/navBtn"

function MyRouterPage() {

    return (
        <BrowserRouter>
            <NavBtns/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
            </Routes>
        </BrowserRouter>
    )

}
export default MyRouterPage