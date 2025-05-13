import {Routes, Route} from 'react-router-dom'
import Layout from '../components/layout/layout'
import Home from '../pages/Home/home'
import Help from '../pages/Help/help'
import Faq from '../pages/FAQ/faq'
import Blog from '../pages/Blog/blog'
import Subscription from '../pages/Subscription/subscription'
import Login from '../pages/Login/login'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="help" element={<Help />} />
          <Route path="faq" element={<Faq />} />
          <Route path="blog" element={<Blog />} />
          <Route path="subscription" element={<Subscription />} />
        </Route>

        <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes
