import React from "react";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostList";
import "./App.css";

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
