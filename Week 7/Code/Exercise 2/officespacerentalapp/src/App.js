import React from "react";
import "./App.css"
import OfficeCard from "./component/OfficeCard";

function App() {
  const heading = "Office Space";

  const offices = [
    { Name: "SDK", Rent: 70000, Address: "Kolkata", image: "/office1.jpg" },
    { Name: "DBS", Rent: 50000, Address: "Chennai", image: "/office2.jpg" }
  ];

  return (
    <div>
      <h1>{heading}, at Affordable Range</h1>
      {offices.map((of) => (
        <OfficeCard office={of} />
      ))}
    </div>
  );
}

export default App;
