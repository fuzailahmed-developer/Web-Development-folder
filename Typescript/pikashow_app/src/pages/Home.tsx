import { Outlet } from "react-router-dom"
import Categories from "../components/Categories"
import Search from "../components/Search"

const Home = () => {
  return (
    <div>
      <Categories />
      <Search />
      <Outlet />
    </div>
  )
}

export default Home