import React from "react";
import data from "../Api/AboutApi";
function Company() {
  return (
    <div>
      {data.map((company,index) => {
        return (
          <div className="accordion p-2" id="accordionExample" key={index}>
            <div className="accordion-item">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="true"
                  aria-controls={`collapse${index}`}
                >
                  <ul
                    className="d-flex justify-content-between"
                    style={{
                      width: "90%",
                      listStyle: "none",
                      paddingLeft: "0",
                      fontSize: "0.85rem",
                    }}
                  >
                    <li>{company.Biling_location}</li>
                    <li>{company.Entity_Name}</li>
                    <li>{company.Entity_Code}</li>
                    <li>{company.MSLA}</li>
                    <li>{company.file_sharing}</li>
                  </ul>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse accordians"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex justify-content-between">
                  <div>
                    <ul>
                      <li>
                        Address <br />
                        <span> {company.address.line1} </span>
                        <br />
                        <span> {company.address.line2} </span>
                        <br />
                        <span>{company.address.city_country}</span>
                        <br />
                        <span>{company.address.ZIP_Code}</span>
                        <br />
                      </li>
                      <li>
                        Change Code / PONumber <br />
                        <span>{company.PO_Number}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        Company Registration Number <br />{" "}
                        <span>{company.Company_Registration}</span>
                      </li>
                      <li>
                        Company Registration Validity <br />{" "}
                        <span>{company.company_regis_validity}</span>
                      </li>
                      <li>
                        Duration of file storage <br />{" "}
                        <span>{company.Duration_file}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        TAX Registration Number <br />
                        <span>{company.TAX}</span>
                        <br />
                      </li>
                      <li>
                        TRN Validity <br />
                        <span>{company.TRN}</span>
                      </li>
                      <li>
                        Currency <br />
                        <span>{company.Currency}</span>
                      </li>
                      <li>
                        VAT + WHT <br />
                        <span>
                          {company.VAT} + {company.WHT}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button id="editButton">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                  </div>
                </div>
                <div className="signpdf p-3">
                  <h6>MSLA</h6>
                  <p>545454eefekneicn lucasfilms.pdf <span><i className="fa-solid fa-eye"></i></span>&nbsp;&nbsp;<span><i className="fa-solid fa-download"></i></span></p>
                </div>
                
                <h6 style={{color:"gray",padding:"1rem"}}>Cooperate Price as per MSLA</h6>
                <table className="table">
                  <thead>
                    <tr style={{color:"gray"}}>
                      <th scope="col">Service</th>
                      <th scope="col">Units</th>
                      <th scope="col">List Price</th>
                      <th scope="col">Offered Price</th>
                      <th scope="col">Discount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Arabic Language Trasition : EZ Assured</td>
                      <td>Words</td>
                      <td>0.1AED</td>
                      <td>0.09AED</td>
                      <td>10%(19%)</td>
                    </tr>
                    <tr>
                      <td>Arabic Language Trasition : EZ Assured</td>
                      <td>Words</td>
                      <td>0.1AED</td>
                      <td>0.09AED</td>
                      <td>10%(19%)</td>
                    </tr>
                    <tr>
                      <td>Arabic Language Trasition : EZ Assured</td>
                      <td>Words</td>
                      <td>0.1AED</td>
                      <td>0.09AED</td>
                      <td>10%(19%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Company;