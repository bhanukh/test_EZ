import './Card.css';
function ClientCard() {
  return (
    <div className="card-container">
      <div>
        <h6 style={{color: "blue"}}>Company Name</h6>
        <p>CODE</p>
      </div>
      <div className='lower'>
        <p>8 Entities</p>
        <p>64 Users</p>
      </div>
    </div>
  );
}

export default ClientCard;