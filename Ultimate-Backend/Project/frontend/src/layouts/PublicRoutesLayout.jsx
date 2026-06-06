import { Navigate, Outlet } from "react-router"
import AuthContext from "../context/auth/auth.context"
import { useContext } from "react"

const PublicRoutesLayout = () => {

  const { isAuthenticated, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return isAuthenticated ? <Navigate to={'/'} replace /> : <Outlet />
}

export default PublicRoutesLayout