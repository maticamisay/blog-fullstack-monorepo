import React from 'react'
import { Row } from 'react-bootstrap';
import Post from '../../components/Post';

const UserPosts = ({data}) => {
  return (
    <Row className="justify-content-center">

        {data?data.map((post) => <Post post={post} key={post.id}/>) :'cargando'}
    </Row>
  )
}

export default UserPosts