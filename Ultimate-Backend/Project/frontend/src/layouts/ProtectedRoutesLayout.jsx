import { Navigate, Outlet } from "react-router"
import Navbar from "../components/Navbar"
import AuthContext from "../context/auth/auth.context"
import { useContext } from "react"

const ProtectedRoutesLayout = () => {

  const { isAuthenticated, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return isAuthenticated ?
    <>
      <Navbar />
      <Outlet />
    </>
    :
    <Navigate to={'/login'} replace />
}

export default ProtectedRoutesLayout