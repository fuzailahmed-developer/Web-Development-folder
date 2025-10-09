import { Routes , Route } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import NotFound from "../pages/NotFound"
import User from "../pages/User"
const MyPages = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/user/:id" element={<User />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )

}
export default MyPages