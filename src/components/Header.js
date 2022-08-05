import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { setGlobalState, useGlobalState } from '../index';

export default function Header({activelink}) {
  const name = JSON.parse(localStorage.getItem("data")).user_name


  // Removed in code optimising phase as the name value is not going to change once user has logged in.It
  // will be assigned when user login in and will not change afterwards or it is not a dynamic data
  // useEffect(() => {
  //   setname(JSON.parse(localStorage.getItem("data")).user_name)
  // }, [])

  const logout = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    data.status = false;
    localStorage.setItem("data", JSON.stringify(data));
    setGlobalState("status", false)
  }

  const del = () => {
    localStorage.removeItem("data")
    setGlobalState("status", false)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-4 py-0">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Homepage">AdminStrap</Link>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link px-2 ${ activelink == "Homepage" ? "text-white bg-dark" : ""}`}
    
                  to="/Homepage">Homepage</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link px-2 ${ activelink == "Pages" ? "text-white bg-dark" : ""}`}
                  to="/Pagespage">Pages</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link px-2 ${ activelink == "Posts" ? "text-white bg-dark" : ""}`}
                  to="/Postpage">Posts</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link px-2 ${ activelink == "Users" ? "text-white bg-dark" : ""}`}
                  to="/Userpage">Users</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link px-2 text-uppercase">{name} </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2" to="/Login" onClick={logout} >Log Out</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2" onClick={del} to="/" >Del Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}


// One way of redirecting is in the above code in which we have used Link to redirect while performing
//certain tasks that are associated before redirecting to the other page. In the above example
// we have changed the state value  upon click that was associated with the Link so redirecting is  taking
// place  also at the same time function/ listner is also getiing executed

// Second way to redirect to another page
// if (!logoutcheck && !delcheck) {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-4 py-0">
//       </nav>
//     </>
//   )
// } else if (logoutcheck ){
//   return <Navigate exact to="/Login" />
// } else if (delcheck ){
//   return <Navigate exact to="/" />
// }
// }