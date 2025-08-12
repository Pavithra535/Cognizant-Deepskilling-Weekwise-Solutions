import React from "react";

function App() {
  // Heading element (JSX)
  const heading = <h1>Office Space Rental</h1>;

  // Office space data
  const offices = [
    {
      name: "Tech Park View",
      rent: 55000,
      address: "MG Road, Bangalore",
      image: "https://via.placeholder.com/200x120"
    },
    {
      name: "Startup Hub",
      rent: 65000,
      address: "Gachibowli, Hyderabad",
      image: "https://via.placeholder.com/200x120"
    },
    {
      name: "Corporate Tower",
      rent: 75000,
      address: "Cyber City, Gurgaon",
      image: "https://via.placeholder.com/200x120"
    }
  ];

  // JSX render
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      {heading}

      {/* Loop through offices */}
      {offices.map((office, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px"
          }}
        >
          {/* Attribute for image */}
          <img src={office.image} alt={office.name} style={{ borderRadius: "6px" }} />

          {/* Name */}
          <h2>{office.name}</h2>

          {/* Rent with conditional inline CSS */}
          <p
            style={{
              color: office.rent < 60000 ? "red" : "green",
              fontWeight: "bold"
            }}
          >
            Rent: ₹{office.rent}
          </p>

          {/* Address */}
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
