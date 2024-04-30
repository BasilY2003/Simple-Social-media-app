import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  
  const [postDetails, setPostDetails] = useState(post);

  return (
    <div className="card align-items-stretch" style={{ width: "18rem" }}>
      <img className="card-img-top" src="./profile.jpg" alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{postDetails.username}</h5>
        <p className="card-text">{postDetails.content}</p>
        <p className="card-text">Likes: {postDetails.likes.length} Comments: {postDetails.comments.length}</p>
        <Link to={`/posts/${postDetails.postId}`} className="btn btn-primary">View Post</Link>
      </div>
    </div>
  );
}
