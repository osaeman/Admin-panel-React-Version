import React, { useState } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import CreateContent from './components/CreateContent'
import Dashboard from './components/Dashboard'
import { Navigate } from "react-router-dom";

export default function Homepage() {
  const [activelink] = useState("Homepage")
  const data = JSON.parse(localStorage.getItem("data"))

  return (
    <>
      {data.status ?
        <div>
          <Header activelink={activelink} />
          <CreateContent />
          <Dashboard />
          <Footer />
        </div> : <Navigate exact to="/Login" />
      }
    </>
  )
}

// Third Way to redirect to some other page