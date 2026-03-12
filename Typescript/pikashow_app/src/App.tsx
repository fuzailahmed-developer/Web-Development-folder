import Header from "./components/Header"
import MyRoutes from './routes/Routes'

const App = () => {
  return (
    <div className="max-w-170 w-full mx-auto min-h-screen b500:p-8 p-5 space-y-8">
      <Header />
      <MyRoutes />
    </div>
  )
}

export default App