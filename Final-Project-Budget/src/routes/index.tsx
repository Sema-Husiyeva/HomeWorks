import {Routes, Route} from 'react-router-dom'
import Layout from '../components/layout/layout'
import Home from '../components/pages/Home/home'
import Help from '../components/pages/Help/help'
import Faq from '../components/pages/FAQ/faq'
import Blog from '../components/pages/Blog/blog'
import Subscription from '../components/pages/Subscription/subscription'
import Login from '../components/pages/Login/login'
import Payment from '../components/pages/Payment/payment'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="help" element={<Help />} />
          <Route path="faq" element={<Faq />} />
          <Route path="blog" element={<Blog />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="payment" element={<Payment />} />
        </Route>

        <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes
