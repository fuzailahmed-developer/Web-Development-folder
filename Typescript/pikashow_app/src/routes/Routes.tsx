import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import AllList from '../components/AllList'
import ActiveList from '../components/ActiveList'
import CompletedList from '../components/CompletedList'

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<AllList />}/>
                <Route path="active" element={<ActiveList />}/>
                <Route path="completed" element={<CompletedList />}/>
            </Route>
        </Routes>
    )
}

export default MyRoutes