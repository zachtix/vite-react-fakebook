import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {CloseButton , Card, Container} from "react-bootstrap"

function Post({id, title, removePost}) {
  return (
    <Container className="mt-3 d-flex justify-content-center">
      {/* <div className='Post' key={id}>
        <button className='Post__delete' onClick={() => removePost}>X</button>
        <div className='Post__title'>{title}</div>
        <img 
          src='https://placehold.jp/300x150.png' 
          className='Post__image'
        />
      </div> */}
      <Card style={{width:'500px'}}>
        {/* <CloseButton onClick={() => removePost} /> */}
        <Container className='mt-2 d-flex justify-content-between'>
          <Card.Title>Atthawut Smith</Card.Title>
          <CloseButton onClick={() => removePost(id)} />
        </Container>
        <Container className='mb-1'>
          <Card.Text>{title}</Card.Text>
        </Container>
        <Card.Img src='https://placehold.jp/500x300.png' />
      </Card>
    </Container>
  )
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  removePost: PropTypes.func.isRequired
};

export default Post