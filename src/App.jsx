import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Error from './pages/Error'
import Rootlayouts from './layouts/RootLayout'
import Shop from './pages/Shop'
import Contact from './pages/Contact'


function App() {
// 
  return (
    <>
    <Routes>
      <Route path="/" element={<Rootlayouts />}>
        <Route index element={<Home />} />          
        <Route path="shop" element={<Shop />} />          
        <Route path="contact" element={<Contact />} />          
        <Route path="about" element={<About />} /> 
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
    </>
  )
}

export default App
