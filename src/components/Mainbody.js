import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { setGlobalState, useGlobalState } from '..'

export default function Mainbody(props) {
  const [tabledata, settabledata] = useState(props.tabledata)

  const deleting = (e) => {
    props.ondelete(e.target.id)
  }

  const filtering = (e) => {
    props.settabledata(tabledata.filter((element) => {
      return (element.entry1.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1)
    })
    )
  }

  return (
    <>
      <section className="p-4">
        <div className="bg-secondary container-fluid">
          <nav >
            <ol className="breadcrumb p-1">
              <li className="breadcrumb-item text-white p-1">Dashboard</li>
              <li className="breadcrumb-item text-dark p-1 active">{props.page}</li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="p-4">
        <div className="container-fluid">
          <div className="row g-4">

            <div className="col-md-3">
              <div className="card text-white mb-3">
                <div className="card-body p-0">
                  <ul className="list-group">
                    <li className="list-group-item border-0 border-bottom">
                      Dashboard
                    </li>
                    <li
                      className={`
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    border-0 border-bottom
                    ${props.page === "Pages" ? "bg-danger" : ""}`
                      }
                    >
                      Pages
                      <span className="badge bg-secondary rounded-pill">14</span>
                    </li>
                    <li
                      className={
                        `
                        list-group-item
                        d-flex
                        justify-content-between
                        align-items-center
                        border-0 border-bottom
                        ${props.page === "Posts" ? "bg-danger" : ""}
                        `
                      }
                    >
                      Posts
                      <span className="badge bg-secondary rounded-pill">2</span>
                    </li>
                    <li
                      className={
                        `
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                      border-0 border-bottom
                      ${props.page === "Users" ? "bg-danger" : ""}
                      `
                      }
                    >
                      Users
                      <span className="badge bg-secondary rounded-pill">1</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="col-md-9">
              <div className="card">
                <div className="card-header bg-danger text-white">Website {props.page}</div>
                <div className="m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="filter"
                    onChange={filtering}
                  />
                </div>
                <div className="card-body table-responsive">
                  <table className="table table-striped table-hover">
                    <tbody id="table-body">
                      <tr className="fw-bold">

                        <td>{props.tableheading.heading1}</td>
                        <td>{props.tableheading.heading2}</td>
                        <td>{props.tableheading.heading3}</td>
                        <td></td>
                      </tr>
                      {props.tabledata.map((ele, index) => {
                        return (
                          <tr key={index}>
                            <td>{ele.entry1}</td>
                            <td>{ele.entry2}</td>
                            <td>{ele.entry3}</td>
                            <td>
                              <Link
                                type="button"
                                className="btn btn-outline-secondary btn-sm"
                                to="/Editpage"
                                onClick={() => { setGlobalState("editpagecontent", { entry1: ele.entry1, page: props.page }) }}
                              >
                                Edit
                              </Link>
                              <button
                                id={ele.entry4}
                                type="button"
                                className="btn btn-danger btn-sm my-2 mx-3 "
                                onClick={deleting}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        )

                      })

                      }

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
