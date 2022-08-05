import React, { useState, useEffect } from 'react'
import { setGlobalState } from '..'


export default function Modal({ modalcontent }) {
  const { type, showfield, showuserfield } = modalcontent
  // states for handling from input values
  const [entry1, setentry1] = useState("")
  const [entry2, setentry2] = useState("")
  const [entry3, setentry3] = useState("")
  const [notfilled, setnotfilled] = useState("")

  const onchange = (e) => {
    if (e.target.id === "Name") {
      setentry1(e.target.value)
      // setuserformdata({entry1 : e.target.value })
    }

    if (e.target.id === "Email") {
      setentry2(e.target.value)
      // setuserformdata({...userformdata, entry2 : e.target.value})
    }

    if (e.target.id === "Title") {
      setentry1(e.target.value)
      // setuserformdata({...userformdata, entry2 : e.target.value})
    }
  }
  // For getting value of checkbox
  const onselect = (e) => {
    if (e.currentTarget.checked === true) {
      setentry2("Yes")
    } else {
      setentry2("No")
    }
  }

  // Function upon Modal Closing
  const onclose = () => {
    setentry1("")
    setentry2("")
    setentry3("")
    setnotfilled("")
  }

  // Function on Submitting Form 
  const onsave = () => {
    if (entry1 !== "" && entry2 !== "") {
      setGlobalState("formdata", {
        entry1: entry1,
        entry2: entry2,
        entry3: (new Date).toLocaleDateString(),
        entry4: type
      })
      setentry1("")
      setentry2("")
      setentry3("")
      setnotfilled("Successfully Submitted")
    } else {
      setnotfilled("Please first fill required fields")
    }
  }

  // Function when user clicks outside the Modal Window
  const outsideclick = () => {
    setentry1("")
    setentry2("")
  }
  return (
    <>
      <section>
        <div className="modal fade" id="exampleModal" tabIndex="-1" onClick={(e) => {
          if (e.target.id === "exampleModal") {
            outsideclick();
          }
        }}>
          <div className="modal-dialog " >
            <div className="modal-content " >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{type}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={onclose}
                ></button>
              </div>
              <div className="modal-body">
                {showuserfield ? <form>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label fw-bold"
                    >Name</label
                    >
                    <input
                      onChange={onchange}
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="hassan"
                      value={entry1}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label fw-bold"
                    >Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="hafeez"
                      required
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label fw-bold"
                    >ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="32214"
                      required
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label fw-bold"
                    >Email
                    </label>
                    <input
                      onChange={onchange}
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="hassan123@gmail.com"
                      required
                      value={entry2}
                    />
                  </div>
                </form> : ""
                }

                {showfield ? <form  >
                  <div className="mb-3">
                    <label
                      className="form-label fw-bold"
                    >{type} Title</label
                    >
                    <input
                      onChange={onchange}
                      type="text"
                      className="form-control"
                      id="Title"
                      placeholder="About"
                      value={entry1}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label fw-bold"
                    >{type} Body</label
                    >
                    <textarea
                      className="form-control"
                      rows="3"
                      name="editor1"
                    ></textarea>

                    <div className="mb-3 mt-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                        onClick={onselect}

                      />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        Published
                      </label>
                    </div>

                    <div className="mb-3 mt-3">
                      <label
                        className="form-label fw-bold"
                      >Meta Tags
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Add Meta Tags"
                        required
                      />
                    </div>

                    <div className="mb-3 mt-3">
                      <label
                        className="form-label fw-bold"
                      >Meta Description
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Add Meta Descriptions"
                      />
                    </div>
                  </div>
                </form> : ""
                }
              </div>
              <div className="modal-footer">
                <p className="text-warning"> {notfilled}</p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={onclose}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" id="save" onClick={onsave}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
