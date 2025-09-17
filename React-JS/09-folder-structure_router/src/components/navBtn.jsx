
import { Link } from "react-router"

function NavBtns() {

    return (
        <nav>
            {/* Link tags */}
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/contact">Contact</Link> |{" "}
            <Link to="/service">Service</Link> 
        </nav>
    )

}
export default NavBtns