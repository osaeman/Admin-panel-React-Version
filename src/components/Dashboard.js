import React from 'react'

export default function Dashboard() {
  return (
  <>
      {/* <!-- -----------------------DASHBOARD HEADING SECTION---------------------- --> */}
    <section className="p-4">
      <div className="bg-secondary container-fluid">
        <nav >
          <ol className="breadcrumb p-1">
            <li className="breadcrumb-item active text-white p-1">Dashboard</li>
          </ol>
        </nav>
      </div>
    </section>
    {/* <!-- -----------------------MAIN DASHBOARD SECTION---------------------- --> */}
    <section className="p-4">
      <div className="container-fluid">
        <div className="row g-4">
          {/* <!-- first --> */}
          <div className="col-md-3">
            <div className="card text-white mb-3">
           
              <div className="card-body p-0">
                <ul className="list-group">
                  <li className="bg-danger list-group-item border-0 border-bottom">
                    Dashboard
                  </li>
                  <li
                    className="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                      border-0 border-bottom
                    "
                  >
                    Pages
                    <span className="badge bg-secondary rounded-pill">14</span>
                  </li>
                  <li
                    className="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                      border-0 border-bottom
                    "
                  >
                    Posts
                    <span className="badge bg-secondary rounded-pill">2</span>
                  </li>
                  <li
                    className="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                      border-0 border-bottom
                    "
                  >
                    Users
                    <span className="badge bg-secondary rounded-pill">1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- second --> */}
          <div className="col-md-9">
            <div className="card">
              <div className="card-header bg-danger text-white">
                Website Overview
              </div>
              <div className="card-body">
                <div className="row g-4 text-center">
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-light py-5">
                      <i className="fal fa-user h2"></i>
                      <span className="h3 ps-2">203</span>
                      <p className="h5">Users</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="bg-light py-5">
                      <i className="fal fa-list h2"></i>
                      <span className="h3 ps-2">12</span>
                      <p className="h5">Pages</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="bg-light py-5">
                      <i className="fal fa-pencil h2"></i>
                      <span className="h3 ps-2">33</span>
                      <p className="h5">Posts</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="bg-light py-5">
                      <i className="fal fa-chart-bar h2"></i>
                      <span className="h3 ps-2">10259</span>
                      <p className="h5">Visits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- third --> */}
          <div className="col-md-3">
            <div className="card p-3 py-5">
              <p className="mb-1">Disk Space Used</p>
              <div className="progress" style={{height: "20px"}}>
                <br />
                <div className="progress-bar" role="progressbar" style={{width: "25%"}}>
                  25%
                </div>
              </div>

              <p className="mb-1 mt-3">Bandwidth Used</p>
              <div className="progress mt-0 pt-0" style={{height: "20px"}}>
                <div className="progress-bar" role="progressbar" style={{width: "75%"}}>
                  25%
                </div>
              </div>
            </div>
          </div>

          {/* <!-- fourth --> */}
          <div className="col-md-9">
            <div className="card">
              <div className="card-header bg-danger text-white">Latest Users</div>
              <div className="card-body table-responsive">
                <table className="table table-striped table-hover">
                  <tbody>
                    <tr className="fw-bold">
                  
                      <td>NAME</td>
                      <td>EMAIL</td>
                      <td>DATE</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@twitter</td>
                    </tr>
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
