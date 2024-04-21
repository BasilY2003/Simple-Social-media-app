import { usePosts } from "../PostsProvider";
import Postsform from "../src/Postsform";
import Post from "./Post";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PostsList() {
    const { posts,setPosts } = usePosts();


    return (
<>
        <Postsform setPosts={setPosts}/>

        <div className="d-flex flex-wrap ">
            {posts.map((post,index) => ( 
                <div key={post.postId + 50} className="m-2 ">
                    <Post
                        content = {post.content}
                        timeCreated = {post.createdAt}
                        name = {post.username}
                        likesNum = {post.likes.length}
                        commentsNum = {post.comments.length}  
                        postId ={post.postId}
                    />

                </div>

            ))}
        </div>

        </>

    );
}


