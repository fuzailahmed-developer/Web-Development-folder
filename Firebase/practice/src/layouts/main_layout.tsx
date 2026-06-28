import { Outlet } from "react-router"
import Navbar from "../components/navbar"
import { Toaster } from "react-hot-toast"

const MainLayout = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500
        }}
      />
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout