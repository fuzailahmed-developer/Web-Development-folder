import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import MyRoutes from "./routes/MyRoutes"


const App = () => {

  return (
    <>
    <ToastContainer />
    <Header />
      <MyRoutes />
    </>
  )
  
}

export default App