import { Route, Routes } from 'react-router'
import HomeScreen from '../pages/home/home'
import MainLayout from '../layouts/main_layout'
import NotFoundScreen from '../pages/not_found/not_found'
import UsersScreen from '../pages/users/users'
import UserScreen from '../pages/users/user/user'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/users' element={<UsersScreen />} />
        <Route path='/users/:id' element={<UserScreen />} />
      </Route>
      <Route path='*' element={<NotFoundScreen />} />
    </Routes>
  )
}

export default AppRoutes