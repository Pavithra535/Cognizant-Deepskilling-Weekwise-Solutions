import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then(data => this.setState({ posts: data }))
      .catch(error => this.setState({ error: error.message }));
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert(`An error occurred: ${error}`);
    console.error("Error details:", info);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <h3 style={{ color: "red" }}>Error: {error}</h3>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
