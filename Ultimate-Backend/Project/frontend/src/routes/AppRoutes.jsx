import { Route, Routes } from "react-router"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Signup from "../pages/signup/Signup"
import PublicRoutesLayout from "../layouts/PublicRoutesLayout"
import ProtectedRoutesLayout from "../layouts/ProtectedRoutesLayout"
import NotFound from "../pages/not_found/NotFound"

const AppRoutes = () => {

  return (
    <Routes>
      {/* Protected Routes */}
      <Route element={<ProtectedRoutesLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Public Routes */}
      <Route element={<PublicRoutesLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>


      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes