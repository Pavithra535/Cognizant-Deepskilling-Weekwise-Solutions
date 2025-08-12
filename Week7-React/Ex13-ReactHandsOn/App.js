import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [view, setView] = useState("book"); // 'book', 'blog', 'course'
  const [showCourses, setShowCourses] = useState(true);


  let displayComponent;
  if (view === "book") {
    displayComponent = <BookDetails />;
  } else if (view === "blog") {
    displayComponent = <BlogDetails />;
  } else {
    displayComponent = <CourseDetails />;
  }

  const componentMap = {
    book: <BookDetails />,
    blog: <BlogDetails />,
    course: <CourseDetails />
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Blogger App</h1>

      {/* Buttons to change view */}
      <button onClick={() => setView("book")}>Show Books</button>
      <button onClick={() => setView("blog")}>Show Blogs</button>
      <button onClick={() => setView("course")}>Show Courses</button>

      <hr />

      <h2>If/Else Conditional Rendering</h2>
      {displayComponent}

      <h2>Ternary Operator</h2>
      {view === "book" ? <BookDetails /> : <BlogDetails />}

      <h2>Logical && Operator</h2>
      <button onClick={() => setShowCourses(!showCourses)}>
        Toggle Courses
      </button>
      {showCourses && <CourseDetails />}

      <h2>Switch/Mapping Rendering</h2>
      {componentMap[view]}
    </div>
  );
}

export default App;
