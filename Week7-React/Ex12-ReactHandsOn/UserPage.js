import React from "react";

function UserPage({ onLogout }) {
  return (
    <div>
      <h2>Book Your Ticket</h2>
      <form>
        <label>
          Destination:
          <input type="text" required />
        </label>
        <br /><br />
        <label>
          Date:
          <input type="date" required />
        </label>
        <br /><br />
        <button type="submit">Book Ticket</button>
      </form>
      <br />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
