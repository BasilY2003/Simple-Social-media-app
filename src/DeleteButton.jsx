import {useNavigate, useParams } from "react-router-dom"
import { usePosts } from "../PostsProvider";
import useDelete from "../CustomHooks/useDelete";



export default function DeleteButton() {

    const POSTS_URL = "http://localhost:8080/posts";

    const navigate = useNavigate();
    const {id} = useParams();


    const { deleteData, isLoading, error } = useDelete(`${POSTS_URL}/${id}`);
    const {posts,setPosts,selectedPost} = usePosts();

    const deletePost = async () => {
        try {
          await deleteData();
          setPosts(posts.filter(post => post.postId !== selectedPost.postId));
          navigate("/posts");
        } catch (error) {
          console.error("Failed to delete post:", error);
        }
      };
    
    return(

        <>
               {selectedPost.username === "Owner" && !isLoading ? (
                <button onClick={deletePost} className="btn btn-danger">Delete</button>
            ) : (
                <p>{isLoading ? "Deleting..." : ""}</p>
            )}
        </>

    );

}