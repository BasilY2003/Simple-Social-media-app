import { usePosts } from "../PostsProvider";
import Postsform from "../src/Postsform";
import Post from "./Post";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PostsList() {
    const { posts,setPosts } = usePosts();
    const {selectedPost} = usePosts();


    return (
<>
        <Postsform setPosts={setPosts}/>

        <div className="d-flex flex-wrap ">
            {posts.map((post) => ( 
                <div key={post.postId} className="m-2 ">
                    <Post
                        content = {post.content}
                        timeCreated = {post.createdAt}
                        name = {post.username}
                        likesNum = {post.likes.length}
                        commentsNum = {selectedPost ? (Number(selectedPost.postId) === Number(posts.postId) ? selectedPost.comments.length : post.comments.length) : post.comments.length}  

                        postId ={post.postId}
                    />

                </div>

            ))}
        </div>

        </>

    );
}


