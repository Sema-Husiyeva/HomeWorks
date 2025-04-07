import React from 'react'
import HomePage from '../pages/home'
import About from '../pages/about/about'
import Layout from '../layout/layout'
import Contact from '../pages/contact/contact'
import {Routes, Route} from 'react-router-dom'



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
