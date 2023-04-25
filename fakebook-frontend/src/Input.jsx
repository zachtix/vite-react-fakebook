import React, {useState} from "react"
import PropTypes from 'prop-types'
import {Button, Form, Card, Container} from "react-bootstrap"

function Input({addPost}) {
  const [text, setText] = useState('')

  function onChange(event) {
    setText(event.target.value)
  }
  function onKeyDown(event) {
    const newPost = event.target.value;
    if (event.key === 'Enter' && 'newPost') {
      addPost(newPost);
      setText('');
    }
  }
  // function onKeyDown(event) {
  //   const newPost = event.target.value;
  //   if (event.key === 'Enter' && newPost) {
  //     addPost(newPost);
  //     setInput('');
  //   }
  // }

  return(
    <Container className="mt-3 d-flex justify-content-center">
      <Card style={{width:'567px'}}>
          <Card.Body>
            <Card.Title>POST</Card.Title>
            <Form>
              <Form.Group>
                <Form.Control type="text" value={text} placeholder="คุณคิดอะไรอยู่" as="textarea" aria-label="With textarea" onChange={onChange} onKeyDown={onKeyDown}/>
              </Form.Group>
            </Form>
          </Card.Body>
      </Card>
    </Container>
  )
}

Input.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default Input