import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Register from "./Register"
import Login from "./Login"
import Dashboard from "./Dashboard"
import PrivateRoutes from "./utils/PrivateRoutes"
import PublicRoutes from "./utils/PublicRoutes"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoutes><Home /></PrivateRoutes>}/>
            <Route path="/register" element={<PublicRoutes><Register /></PublicRoutes>}/>
            <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes>}/>
            <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>}/>
        </Routes>
    )
}

export default MyRoutes