import { Route, Routes } from "react-router-dom"
import CreatePost from "../pages/CreatePost"
import Feed from "../pages/Feed"
import Home from "../pages/Home"

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create-post" element={<CreatePost />}/>
      <Route path="/feed" element={<Feed />}/>
    </Routes>
  )
}
