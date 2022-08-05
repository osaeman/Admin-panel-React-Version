import React, { useState, useEffect } from 'react'
import Footer from "./components/Footer"
import { Link, Navigate } from "react-router-dom"


export default function Signup() {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("");
  const [usercheck, setusercheck] = useState(false)
  const [passcheck, setpasscheck] = useState(false)
  const [check, setcheck] = useState(true)
  const [data, setdata] = useState({});


  const userupdate = (e) => {
    setusername(e.target.value)
  }

  const passupdate = (e) => {
    setpassword(e.target.value)
  }

  const onclick = () => {
    setdata({
      user_name: username,
      pass_word: password,
      status: false,
    })

    username === "" ? setusercheck(true) : setusercheck(false)
    password === "" ? setpasscheck(true) : setpasscheck(false)

  }

  useEffect(() => {
    if (username !== "" && password !== "") {
      localStorage.setItem("data", JSON.stringify(data));
      window.alert("Your account has been created successfully. Now you can proceed to the Login page")
      setusername("")
      setpassword("")
      setcheck(false)
    }
  }, [data])


  return (
    <>
      {check ?
        <div>
          <section
            className="
        mt-5
        d-flex
        justify-content-center
        align-items-center
        login-section
      "
          >
            <div className="container">
              <div className="row">
                <div
                  className="
              col-md-5 col-sm-9 col-10
              m-auto
              border border-danger border-end-0 border-start-0
              py-3
            "
                >
                  <div
                    className="
                col-md-11 col-sm-11 col-11
                m-auto
                border border-secondary border-bottom-0 border-top-0
              "
                  >

                    <div className="p-3 signup">
                      <h1 className='fs-3 text-center' >SIGN UP</h1>
                      <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input
                          type="text"
                          className="form-control username"
                          placeholder="John Doe"
                          value={username}
                          onChange={userupdate}
                          required
                        />
                        <small className="text-danger">{usercheck ? "Please Enter Username First!" : ""}</small>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control password"
                          placeholder="****"
                          value={password}
                          onChange={passupdate}
                          required
                        />
                        <small className="text-danger">{passcheck ? "Please Enter Password First!" : ""}</small>
                      </div>

                      <div className="mb-3">
                        <small className="text-primary">
                          {"Please add your credentials to make an account"}
                          <br />
                          <Link
                            className=" text-decoration-none btn btn-primary btn-sm  me-2"
                            to="/Login"
                          >To Login page</Link>

                        </small>
                      </div>
                      <div className="mb-3 text-center">
                        <a className="btn btn-dark" role="button" onClick={onclick}> Signup </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
        : <Navigate exact to="/Login" />
      }
    </>
  )
}
