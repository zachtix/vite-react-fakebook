import React, { useState } from "react"
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

import Input from "./Input"
import Post from "./Post"

let id = 1;

function App() {
  const [posts, setPosts] = useState([])

  function addPost(newPost) {
    setPosts([{ id, title: newPost}, ...posts])
    id += 1
  }

  function removePost(id) {
    const updatePosts = posts.filter((post) => post.id !== id)
    setPosts(updatePosts)
  }

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">FakeBOOK</Navbar.Brand>
        </Container>
      </Navbar>
      <Input addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          removePost={removePost}
          />
      ))}
    </>
  )
}

export default App
