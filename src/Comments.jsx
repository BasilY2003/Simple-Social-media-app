import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import useCommentsPOST from '../CustomHooks/useCommentsPOST';

const POST_URL = `http://localhost:8080/posts`;

export default function Comments({ name, content, createdAt, numberoflikes,userslike,postId,commentId }) {

  const id = postId;
  const { postJsonData } = useCommentsPOST(`${POST_URL}/${id}/comments/${commentId}`);


  const authorName = "Owner";

  const likeObject = {
    authorName:authorName
  }

  const [commentLikes, setCommentLikes] = useState(numberoflikes);
  const [isClicked,setIsClicked] = useState(false);
  userslike.map(like => like.authorName === authorName ? setIsClicked(true) : false)


  const handleLikeClick = () => {
    postJsonData(likeObject).then(res => {

      setIsClicked(true);
    setCommentLikes(prevLikes => prevLikes + 1);

    }).catch(error => console.log(error))
  };

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h4>{name}</h4>
          <h5>{content}</h5>
        </div>
        <div>
          {isClicked ? null : <button className="btn btn-primary" onClick={handleLikeClick}>
            Like
          </button>}
          
          <p>{commentLikes}</p>
        </div>
      </div>
      <small>{createdAt}</small>
    </li>
  );
}
