import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails 
        name="React Fundamentals" 
        status="Ongoing" 
        startDate="2025-01-10" 
        endDate="2025-02-20" 
      />
      <CohortDetails 
        name="Node.js Bootcamp" 
        status="Completed" 
        startDate="2024-11-05" 
        endDate="2024-12-15" 
      />
    </div>
  );
}

export default App;
