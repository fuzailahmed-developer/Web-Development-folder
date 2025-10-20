import { Route, Routes } from "react-router"
import Api from "../pages/Api"
import Home from "../pages/Home"
import AddUser from "../pages/AddUser"
import Edit from "../pages/Edit"

const MyPages = () => {


    return (
        <Routes>
            <Route path="/api" element={<Api />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/user" element={<AddUser />}/>
            <Route path="/edit/:id" element={<Edit />}/>
        </Routes>
    )

}
export default MyPages