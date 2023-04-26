import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Button, CloseButton , Card, Container, OverlayTrigger , Tooltip } from "react-bootstrap"

function Post({id, text, like, removePost, updateLike}) {
  // console.log("Child Rendered");
  const [countLike, setCountLike] = useState(like)
  function addLike() {
    setCountLike(countLike+1)
    updateLike(id)
  }
  return (
    <Container className="mt-3 d-flex justify-content-center">
      <Card style={{width:'560px'}}>
        <Container className='mt-2 d-flex justify-content-between'>
          <Card.Title>Mark Suckerberg</Card.Title>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete Post</Tooltip>} placement="bottom">
            <span className="d-inline-block">
              <CloseButton onClick={() => removePost(id)} />
            </span>
          </OverlayTrigger>
        </Container>
        <Container className='mb-1'>
          <Card.Text>{text}</Card.Text>
        </Container>
        <Card.Img src='https://placehold.jp/500x200.png' />
        <Button variant="outline-primary" className='m-3 p-0' style={{width:'70px'}} onClick={addLike}>Like {countLike}</Button>
      </Card>
    </Container>
  )
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  removePost: PropTypes.func.isRequired,
  updateLike: PropTypes.func.isRequired
};

export default Post