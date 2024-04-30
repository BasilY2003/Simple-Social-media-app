import { useState } from "react";
import usePostsPOST from "../CustomHooks/useCommentsPOST"; 
import { usePosts } from "../PostsProvider";
import { useNavigate } from "react-router-dom";

const POSTS_URL = `http://localhost:8080/posts`;

export default function AddPage(){

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { postJsonData, isLoading, error } = usePostsPOST(POSTS_URL); 
  const { setPosts } = usePosts();
  const navigate = useNavigate();

  const addPost = () => {
    const postObject = {
      content: content,
      username: "Owner", 
      timestamp: new Date().toISOString(), 
      likes: [],
      comments: [],
    };

    postJsonData(postObject)
      .then((response) => {
        setPosts((prevPosts) => [...prevPosts, response]);
        setTitle("");
        setContent("");
        navigate("/posts");

      })
      .catch((error) => {
        console.error("Failed to add post:", error);
      });
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2 className="mb-4">Add New Post</h2>
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
            {error && <div className="text-danger mt-3">Error: {error.message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
