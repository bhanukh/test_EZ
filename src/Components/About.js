import React from "react";

function About() {
  return (
    <div className="about-company">
      <div className="company-name-editbtn">
        <h5>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3997/3997635.png"
            alt="pdf_img"
          />
          Locus film Private Limited
        </h5>
        <button
          type="button"
          className="btn"
          style={{ color: "#3CC3F2", border: "1px solid #3CC3F2" }}
        >
          Edit
        </button>
      </div>
      <div className="Domains">
        <div className="company-code-logo">
          <p>
            Company Code <br />
            <span>LUCF</span>
          </p>
          <p>
            Company logo <br />
            <span>Unavailable</span>
          </p>
        </div>
        <div className="domains-types">
          <p style={{ textAlign: "center" }}>Domains</p>
          <ul className="ul-list">
            <li>
              <a href="/">@lucasfilms.com</a>
            </li>
            <li>
              <a href="/">@lucasstarwars.com</a>
            </li>
            <li>
              <a href="/">@starwars.com</a>
            </li>
            <li>
              <a href="/">+5 others</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;