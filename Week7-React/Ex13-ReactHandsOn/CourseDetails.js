import React from "react";

function CourseDetails() {
  const courses = [
    { id: 1, name: "Full Stack Development" },
    { id: 2, name: "Data Structures & Algorithms" },
    { id: 3, name: "Cloud Computing" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
