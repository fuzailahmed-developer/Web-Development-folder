import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Users from "./Users"
import UserInfo from "./UserInfo"
import Search from "./Search"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/read" element={<Users />}/>
            <Route path="/read/:id" element={<UserInfo />}/>
            <Route path="/search" element={<Search />}/>
        </Routes>
    )
}

export default MyRoutes