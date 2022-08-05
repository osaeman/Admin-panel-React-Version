import React, { useState } from 'react'
import Modal from './Modal'

export default function CreateContent(props) {
  // On the basis of selected item in dropdown menu , Content in modal will be shown
  const [modalcontent, setmodalcontent] = useState({})
  const modalcontentupdate = (e) => {
    if (e.target.id === "Add page") {
      setmodalcontent({
        type: "Page",
        showfield: true,
        showuserfield: false
      })
    }

    if (e.target.id === "Add post") {
      setmodalcontent({
        type: "Post",
        showfield: true,
        showuserfield: false
      })
    }

    if (e.target.id === "Add user") {
      setmodalcontent({
        type: "User",
        showuserfield: true,
        showfield: false
      })
    }
  }
  return (
    <>
      <section className="p-4 bg-dark text-white">
        <div className="container-fluid">
          <div className="d-md-flex align-items-center">
            <h1 className="">{props.page}</h1>
            <p className="text-secondary px-md-2 lead my-md-auto fs-3">
              Manage Your Site {props.page}
            </p>
            <div className="ms-auto">
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle btn-sm"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                >
                  Create Content
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      id="Add page"
                      onClick={modalcontentupdate}
                    >Add page</a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      id="Add post"
                      onClick={modalcontentupdate}
                    >Add post</a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      id="Add user"
                      onClick={modalcontentupdate}>Add user</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal  modalcontent={modalcontent}/>
    </>
  )
}
