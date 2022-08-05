import React, { useState, useLocation } from 'react';
import Footer from "./components/Footer"
import { Link, Navigate } from "react-router-dom";
import { setGlobalState, useGlobalState } from "./index"

export default function Login() {
  const [loginuser, setloginuser] = useState("");
  const [loginpass, setloginpass] = useState("");
  const [credentialcheck, setcredentialcheck] = useState("");
  const [accountcheck, setaccountcheck] = useState("");
  const data = JSON.parse(localStorage.getItem("data"));

  const userupdate = (e) => {
    setloginuser(e.target.value)
  }

  const passupdate = (e) => {
    setloginpass(e.target.value)
  }

  const onclick = () => {
    if (data === null) {
      setaccountcheck("You don't have any account on our website. So, first create an account")
      return;
    }

    if (loginpass !== data.pass_word || loginuser !== data.user_name) {
      setcredentialcheck("Invalid Username or Password")
    } else if (
      loginpass === data.pass_word &&
      loginuser === data.user_name
    ) {
      data.status = true;
      setcredentialcheck("")
      localStorage.setItem("data", JSON.stringify(data));
      if (data.status === true) {
        setGlobalState("status", data.status)
      }
    }
  }

  return (
    <>
     {useGlobalState("status")[0] === true || data.status ? <Navigate exact to="/Homepage" /> : ""}
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

                <form className="login p-3">
                  <h1 className='fs-3 text-center' >LOGIN</h1>
                  <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="John Doe"
                      value={loginuser}
                      required
                      onChange={userupdate}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control "
                      placeholder="****"
                      value={loginpass}
                      onChange={passupdate}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <p className="text-danger">{accountcheck}</p>
                    <p className="text-danger">{credentialcheck}</p>
                    <small className="text-primary">
                      If you don't have an account here then first create your
                      account.
                      <br />
                      <Link
                        className="btn btn-primary btn-sm text-decoration-none fs-6"
                        to="/">To Signup page</Link>
                    </small>
                  </div>
                  <div className="mb-3 text-center">
                    <a className="btn btn-dark" role="button" onClick={onclick}> Login </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}


// Fourth way of Redirecting to Another page