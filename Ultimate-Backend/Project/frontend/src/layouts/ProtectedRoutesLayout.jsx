import { Navigate, Outlet } from "react-router"
import Navbar from "../components/Navbar"

const ProtectedRoutesLayout = () => {

  const isAuthStatus = JSON.parse(localStorage.getItem('isAuthStatus')) || false

  return isAuthStatus ?
    <>
      <Navbar />
      <Outlet />
    </>
    :
    <Navigate to={'/login'} replace />
}

export default ProtectedRoutesLayout