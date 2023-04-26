import React, { useState } from "react"
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

import Input from "./Input"
import Post from "./Post"

let id = 1;

function App() {

  const [posts, setPosts] = useState([{id:0, text:'test',like:1000}])

  function addPost(newPost) {
    setPosts([{ id, text: newPost, like:0}, ...posts])
    id += 1
  }

  function removePost(id) {
    const updatePosts = posts.filter((post) => post.id !== id)
    setPosts(updatePosts)
  }
  
  function updateLike(id) {
    posts.filter((post) => {
      if (post.id == id) {
        post.like += 1
        // console.log(post);
      }
    })
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
          text={post.text}
          like={post.like}
          removePost={removePost}
          updateLike={updateLike}
          />
      ))}
    </>
  )
}

export default App
