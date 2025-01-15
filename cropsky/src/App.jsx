import { Routes, Route } from 'react-router-dom'

import Navbar from './common/navbar';
import Footer from './common/footer';
import Contact from './pages/contactus/contact';
import Team from './pages/contactus/components/Team';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={"NOT FOUND!"} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App