import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import Comments from "../src/Comments";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import CommentsForm from "../src/CommentsForm";
import { usePosts } from "../PostsProvider";
import Like from "../src/Like"
import DeleteButton from "../src/DeleteButton";
import FullPageSpinner from "../src/FullPageSpinner";


const POSTS_URL = "http://localhost:8080/posts";


export default function PostPage() {

  const {id} = useParams();
  const {selectedPost,setSelectedPost,likes,setLikes,comments,setComments} = usePosts();
    

    useEffect(() => {
      fetch(`${POSTS_URL}/${id}`)
          .then(rs => rs.json())
          .then(post => {
            setSelectedPost(post);
            setComments([...post.comments]);
            setLikes([...post.likes]);          })
          .catch(e => console.log(e));
     }, [id,setLikes,setComments,setSelectedPost]);

    
  
  if (!selectedPost) return (<FullPageSpinner />);

  
   return ( 
    <>
            <div className="container d-flex justify-content-center">
                <div className="card mb-3" style={{ width: "50%", height: "35%" }}>
                    <img src="../profile.jpg" className="card-img-top" alt="..." style={{ height: "30%" }} />
                    <div className="card-body">
                        <h5 className="card-title">Title: {selectedPost.username}</h5>
                        <p className="card-text">{selectedPost.content}</p>
                        <p className="card-text">
                            <small className="text-muted">{selectedPost.date}</small>
                        </p>
                        <div className="d-flex align-items-center">
                            <h4>Likes: {likes.length}</h4>
                          

                            <Like postId={id} likes={likes} setlikes={setLikes} />
                        </div>
                        <h4>Comments: {comments.length}</h4>
                        <DeleteButton /> 
                        {selectedPost.username === "Owner" ? (<Link className="btn btn-outline-secondary ml-md-4" to={`update`}>Edit</Link>) : null} 

                    </div>
                </div>
                <div className="container" style={{ width: "45%" }}>
                    <CommentsForm setComments={setComments} comments={comments} id={id} />
                    <div className="list-group list-unstyled">
                        {comments.map((comment, index) => (
                            <div key={comment.commentId} className={`list-group-item ${index !== 0 ? 'mt-3' : ''}`}>
                                <Comments
                                    content={comment.content}
                                    name={comment.userName}
                                    createdAt={comment.date}
                                    numberoflikes={comment.likes.length}
                                    userslike={comment.likes}
                                    postId={comment.postid}
                                    commentId={comment.commentId}
                                    key={comment.commentId + 10000}

                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    
    
);

}