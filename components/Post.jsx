import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default function Post({postId,content, commentsNum, likesNum, name }) {
    return (
      <div className="card align-items-stretch" style={{ width: "18rem" }}>
        <img className="card-img-top" src="./profile.jpg" alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{content}</p>
          <p className="card-text">Likes: {likesNum} Comments: {commentsNum}</p>
          <Link to={`/posts/${postId}`} className="btn btn-primary">View Post</Link>
        </div>
      </div>
    );
  }
  