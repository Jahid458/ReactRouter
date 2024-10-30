import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
  
  const {id, title} = post;

  const userStyle ={
    border:'2px solid red',
    padding: '10px',
    borderRadius: '10px'
  }
  const navigate = useNavigate();

  const handleShowDetails =() =>{
      navigate(`/post/${id}`)
  }

  return (
    <div style={userStyle}>
      <h4>Post of Id: {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}> Post Deatils</Link>
    <button onClick={handleShowDetails}>Click to see details</button>
    </div>
  );
};

export default Post;