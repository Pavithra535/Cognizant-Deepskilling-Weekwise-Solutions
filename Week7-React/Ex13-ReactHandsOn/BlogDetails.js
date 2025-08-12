import React from "react";

function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Hooks Guide", author: "Dev Blogger" },
    { id: 2, title: "Understanding ES6", author: "Tech Guru" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <em>{blog.title}</em> - {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
