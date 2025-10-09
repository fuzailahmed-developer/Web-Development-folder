
// noted : 
// 1. for use useFormStatus form action per aik function run kro or isa delay dena ka liya async function + promise use kro  
// or per nested component banao button ka liya or const {pending} = useFormStatus()



import { BrowserRouter } from "react-router"
import MyPages from "./utils/router"
import Navbar from "./components/Navbar"

function App() {

  return(
    <BrowserRouter>
      <Navbar />
      <MyPages />
    </BrowserRouter>
  )
  

}
export default App