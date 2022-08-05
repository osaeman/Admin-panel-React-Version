import react from 'react'
import Homepage from './Homepage'
import Signup from './Signup'
import Login from "./Login"
import Pagespage from './Pagespage'
import Postpage from './Postpage'
import Userpage from './Userpage'
import Editpage from "./Editpage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Signup/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      <Route exact path="/Homepage" element={<Homepage/>}/>
      <Route exact path="/Pagespage" element={<Pagespage/>}/>
      <Route exact path="/Postpage" element={<Postpage/>}/>
      <Route exact path="/Userpage" element={<Userpage/>}/>
      <Route exact path="/Editpage" element={<Editpage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

