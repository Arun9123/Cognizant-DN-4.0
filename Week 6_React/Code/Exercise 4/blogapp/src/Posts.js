import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const postList = data.map(p => new Post(p.id, p.title, p.body));
        this.setState({ posts: postList });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    return (
      <div>
        <h1>All Posts</h1>
        {this.state.posts.map(p => (
          <div key={p.id}>
            <h2>{p.title}</h2>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    );
  }

  componentDidCatch(error, info) {
    alert("Error: " + error);
  }
}

export default Posts;
