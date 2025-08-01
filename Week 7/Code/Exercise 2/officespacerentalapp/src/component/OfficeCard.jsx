function OfficeCard({ office }) {
  const textColor = office.Rent > 60000 ? "green" : "red";

  return (
    <div>
      <img src={office.image} width="35%" height="35%" alt="Office" />
      <h2>Name: {office.Name}</h2>
      <h3 style={{ color: textColor }}>Rent: Rs. {office.Rent}</h3>
      <h3>Address: {office.Address}</h3>
    </div>
  );
}

export default OfficeCard;