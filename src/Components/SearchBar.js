import React from "react";

function SearchBar() {
  return (
    <div className="input-group mb-3" style={{border:"1px solid lightgray",}}>
      <input style={{border: "none"}}
        type="text"
        className="form-control"
        placeholder="Company, Entity, User Domain, Service, Location"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button style={{ border: 'none'}}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default SearchBar;