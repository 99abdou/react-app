/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import profil from './gallery/images/pp-1.jpg' 

const Sidebar = () => {
  return  <><nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebar"
              aria-controls="offcanvasExample"
          >
              <span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
          </button>
          <a
              className="navbar-brand me-auto text-black ms-lg-0 ms-3 fw-bold"
              href="#"
          >Frontend</a>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#topNavBar"
              aria-controls="topNavBar"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topNavBar">
              <form className="d-flex my-3 my-lg-0">
                  <div className="input-group">
                      <input
                          className="form-control"
                          type="search"
                          placeholder="Search"
                          aria-label="Search" />
                      <button className="btn btn-primary" type="submit">
                          <i className="fa-solid fa-search"></i>
                      </button>
                  </div>
              </form>
              <div className="btn-upload d-flex justify-content-around gap-2 ms-auto">
                  <button type="button" className="btn  border btn-up rounded-5 text-info"><i className="fa-solid fa-cloud-arrow-down"></i>Upload</button>
                  <div className="icon-notif text-info mt-2">
                      <i className="fa fa-bell"></i>
                  </div>
                  <div className="profil">

                  </div>

                  <ul className="navbar-nav  ms-auto">
                      <li className="nav-item dropdown">
                          <a
                              className="nav-link dropdown-toggle ms-2"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                          >
                              <img src={profil} alt="" /> </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                              <li><a className="dropdown-item" href="#">Action</a></li>
                              <li><a className="dropdown-item" href="#">Another action</a></li>
                              <li>
                                  <a className="dropdown-item" href="#">Something else here</a>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </nav><div
      className="offcanvas offcanvas-start sidebar-nav bg-dark"
      tabIndex="-1"
      id="sidebar"
  >
          <div className="offcanvas-body p-0">
              <nav className="navbar-dark">
                  <ul className="navbar-nav">
                      <li>
                          <div className="text-muted small fw-bold text-uppercase px-3">
                              CORE
                          </div>
                      </li>
                      <li>
                          <a href="#" className="nav-link px-3 active">
                              <span className="me-2"><i className="bi bi-speedometer2"></i></span>
                              <span>Dashboard</span>
                          </a>
                      </li>
                      <li className="my-4"><hr className="dropdown-divider bg-light" /></li>
                      <li>
                          <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                              Interface
                          </div>
                      </li>
                      <li>
                          <a
                              className="nav-link px-3 sidebar-link"
                              data-bs-toggle="collapse"
                              href="#layouts"
                          >
                              <span className="me-2"><i className="bi bi-layout-split"></i></span>
                              <span>Layouts</span>
                              <span className="ms-auto">
                                  <span className="right-icon">
                                      <i className="bi bi-chevron-down"></i>
                                  </span>
                              </span>
                          </a>
                          <div className="collapse" id="layouts">
                              <ul className="navbar-nav ps-3">
                                  <li>
                                      <a href="#" className="nav-link px-3">
                                          <span className="me-2"
                                          ><i className="bi bi-speedometer2"></i></span>
                                          <span>Dashboard</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </li>
                      <li>
                          <a href="#" className="nav-link px-3">
                              <span className="me-2"><i className="bi bi-book-fill"></i></span>
                              <span>Pages</span>
                          </a>
                      </li>
                      <li className="my-4"><hr className="dropdown-divider bg-light" /></li>
                      <li>
                          <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                              Addons
                          </div>
                      </li>
                      <li>
                          <a href="#" className="nav-link px-3">
                              <span className="me-2"><i className="bi bi-graph-up"></i></span>
                              <span>Charts</span>
                          </a>
                      </li>
                      <li>
                          <a href="#" className="nav-link px-3">
                              <span className="me-2"><i className="bi bi-table"></i></span>
                              <span>Tables</span>
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
      </div>
      </>

}

export default Sidebar;
