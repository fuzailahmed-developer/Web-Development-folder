import { Route , Routes } from "react-router";
import Transition from "../components/Trasition";
import FormSubmiting from "../components/FormSubmiting";
import User from "../components/User";


const MyPages = () => {
    return (
        <Routes>
            <Route path="/" element={<FormSubmiting />}/>
            <Route path="/transition" element={<Transition />}/>
            <Route path="/user" element={<User />}/>
        </Routes>
    )
}
export default MyPages