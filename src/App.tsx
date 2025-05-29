import { Routes, Route } from 'react-router-dom'
import {Home} from './pages/home/home'
export function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />


      {/* 
      <Route path="/about" element={<Aboutus />} />
      <Route path="/commerce" element={<Commerce/>} />
      <Route path="/campaigns" element={<Campaigns/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/residential/:complexId" element={<ResidentialComplex/>} /> */}


      <Route path="*" element={<div>404 Not Found Kasym</div>} />
    </Routes>
  )
}