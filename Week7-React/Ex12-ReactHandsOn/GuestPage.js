import React from "react";

function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Flight Details</h2>
      <ul>
        <li>Flight: AI101 | From: Delhi | To: Mumbai | Price: ₹5000</li>
        <li>Flight: AI202 | From: Chennai | To: Bangalore | Price: ₹3000</li>
      </ul>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default GuestPage;
