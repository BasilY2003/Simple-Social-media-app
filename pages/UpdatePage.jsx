import { useEffect, useState } from "react";
import useUpdate from "../CustomHooks/useUpdate";
import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../PostsProvider";

const POST_URL = "http://localhost:8080/posts";

export default function UpdatePage() {
  const { id } = useParams();
  const [updatedPost, setUpdatedPost] = useState(null); // Initialize updatedPost as null
  const [content, setContent] = useState(""); // Initialize content as an empty string

  useEffect(() => {
    fetch(`${POST_URL}/${id}`)
      .then(res => res.json())
      .then(data => {
        setUpdatedPost(data);
        setContent(data.content); // Update content after updatedPost is set
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]); 

  const { updateData, isLoading, error } = useUpdate(`${POST_URL}/${id}`);
  const navigate = useNavigate();

  const updatePost = async () => {
    try {
      const updatedPostData = {
        content : content
      };

      await updateData(updatedPostData);
      navigate(`/posts/${id}`);
      console.log("Post updated successfully!");
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  if (!updatedPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2>Update Post</h2>
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
              onClick={updatePost}
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Post"}
            </button>
            {error && <div className="text-danger mt-3">Error: {error.message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
