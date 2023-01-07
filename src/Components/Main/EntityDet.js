import Company from './Company';

function EntityDet() {
  return (
    <div>
      <div className="add-entity d-flex justify-content-between p-2">
        <h5>4 Entities</h5>

        <button style={{ border: "none", color: "#3CC3F2" }}>
          <i
            className="fa-solid fa-square-plus"
            style={{ fontSize: "2rem" }}
          ></i>
        </button>
      </div>
      <div className="biling-details" style={{ width: "90%" }}>
        <ul className="d-flex justify-content-between">
          <li>Billing Location</li>
          <li>Entity Name</li>
          <li>Entity Code</li>
          <li>MSLA Valid Through</li>
          <li>File Sharing</li>
        </ul>
      </div>

      <Company />
    </div>
  );
}

export default EntityDet;