import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Element variable for conditional rendering
  let page;

  if (isLoggedIn) {
    page = <UserPage onLogout={() => setIsLoggedIn(false)} />;
  } else {
    page = <GuestPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ticket Booking App</h1>
      {page}
    </div>
  );
}

export default App;
