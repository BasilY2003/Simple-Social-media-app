import { usePosts } from "../PostsProvider";
import Post from "./Post";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PostsList() {
    const { posts,selectedPost } = usePosts();



    return (
        
        <>

        <div className="d-flex flex-wrap ">
            {posts.map((post) => ( 
                <div key={post.postId + 50} className={`m-2 ${selectedPost && selectedPost.postId === post.postId ? 'border border-primary border border-2 rounded-3 ' : ''}`}>
                    <Post
                        post={post}
                    />

                </div>

            ))}
        </div>
        
        </>
    );
}


