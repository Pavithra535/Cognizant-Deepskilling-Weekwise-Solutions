import React from "react";

function BookDetails() {
  const books = [
    { id: 1, title: "React for Beginners", author: "John Doe" },
    { id: 2, title: "Advanced JavaScript", author: "Jane Smith" },
    { id: 3, title: "Node.js in Action", author: "Sam Wilson" }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
