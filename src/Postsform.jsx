import { useState } from "react";
import usePostsPOST from "../CustomHooks/useCommentsPOST"; 

const POSTS_URL = `http://localhost:8080/posts`;

export default function Postsform({ setPosts }) {


  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { postJsonData, isLoading, error } = usePostsPOST(POSTS_URL); 

  const addPost = () => {
    const postObject = {
      content: content,
      username: "new_user", 
      timestamp: new Date().toISOString(), 
      likes: [],
      comments: []
    };

    postJsonData(postObject)
      .then(() => {
        setPosts((prevPosts) => [...prevPosts, postObject]);
        setTitle("");
        setContent("");
      })
      .catch((error) => {
        console.error("Failed to add post:", error);
      });
  };

  return (
    <>
      <div className="container" style={{ width: "35%", float: "right" }}>
  <div className="my-3">
    <h2>Add New Post</h2>
    <div className="mb-3">
      <label htmlFor="postTitle" className="form-label">
        Title
      </label>
      <input
        type="text"
        className="form-control"
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="postContent" className="form-label">
        Content
      </label>
      <textarea
        className="form-control"
        id="postContent"
        rows="5"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    </div>
    <button
      className="btn btn-primary"
      onClick={addPost}
      disabled={isLoading}
    >
      {isLoading ? "Adding..." : "Add Post"}
    </button>
    {error && <div className="text-danger">Error: {error.message}</div>}
  </div>
</div>

    </>
  );
}
