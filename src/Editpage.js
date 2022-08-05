import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useGlobalState } from '.';

export default function Editpage() {
  const { entry1, page } = useGlobalState("editpagecontent")[0]
  return (
    <>
      <Header />
      <section className="p-4">
        <div className="bg-secondary container-fluid">
          <nav >
            <ol className="breadcrumb p-1">
              <li className="breadcrumb-item text-white p-1">Dashboard</li>
              <li className="breadcrumb-item text-white p-1">{page}</li>
              <li className="breadcrumb-item text-dark p-1 active">Edit {entry1}</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="p-4">
        <div className="container-fluid">
          <div className="row g-4">

            <div className="col-md-3"></div>

            <div className="col-md-9">
              <div className="card">
                <div className="card-header bg-danger text-white">Edit {entry1}</div>

                <div className="card-body">
                  <form action="">
                    <div className="mb-3">
                      <label
                        className="form-label fw-bold"
                      >Page Title</label
                      >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="About"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        className="form-label fw-bold"
                        htmlFor="exampleFormControlTextarea1"
                      >Page Body</label
                      >
                      <textarea
                        className="form-control"
                        rows="3"
                        id="exampleFormControlTextarea1"
                        name="editor1"
                      ></textarea>
                    </div>
                    <div className="mb-3 mt-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
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
                        type="text"
                        className="form-control"
                        placeholder="Add Meta Tags"
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
                    <input type="submit" className="btn btn-danger"  />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
