import React from 'react'
import Header from './layouts/header';
import Home from './pages/home/home';
import Footer from './layouts/footer';
import Counter from './layouts/counter';




const App = () => {
  return (
    <React.Fragment>
       <Header />
       <Home/>
       <Counter />
    </React.Fragment>
  )
}

export default App
