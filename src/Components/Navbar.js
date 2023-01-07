import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Clints
        </a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active down-arrow" aria-current="page" href="/">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2952/2952212.png"
                  alt="down-arrow"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Creation Time
              </a>
            </li>
          </ul>
          <span
            className="navbar-text"
            style={{ color: "#3CC3F2", fontSize: "2rem" }}
          >
            <i className="fa-solid fa-square-plus"></i>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar