import { Navigate, Outlet } from "react-router"

const PublicRoutesLayout = () => {

  const isAuthStatus = localStorage.getItem('isAuthStatus') || false

  return isAuthStatus ? <Navigate to={'/'} replace /> : <Outlet />
}

export default PublicRoutesLayout