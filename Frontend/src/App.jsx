import React from 'react'
import Header from './component/Header';
import Footer from './component/Footer'
import Navbar from './component/Navbar';
import { Route,Routers } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Services from './component/Services';
const App = () => {
  return (
    <>
    {/* <Header />
    <Footer /> */}
    <Navbar/>
    <Router>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      
    </Router>
  ) ;
} ;

export default App;