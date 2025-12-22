import React from 'react'
import Header from './component/Header';
import Footer from './component/Footer'
import Navbar from './component/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Service';
import UseState from './Hooks/UseState';
const App = () => {
  return (
    <>
    {/* <Header />
    <Footer /> */}
    <Navbar/>
    <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/usestate' element={<UseState/>}/>
        <Route path='/useeffect' element={<useEffect/>}/>
    </Routes>

    </>
  ) ;
} ;

export default App;