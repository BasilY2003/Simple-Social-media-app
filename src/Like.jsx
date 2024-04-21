import useCommentsPOST from "../CustomHooks/useCommentsPOST";

const POSTS_URL = "http://localhost:8080/post-liked";

export default function Like({ postId, likes,setlikes }) {


  const { postJsonData, isLoading, error } = useCommentsPOST(`${POSTS_URL}/${postId}`);

  const isLiked = likes.filter(like => like.authorName === "yousef basil").length

  const addLike = () => {


    const newLike = {
      authorName: "yousef basil", 
    };



    postJsonData(newLike)
  .then((response) => {

    setlikes([...likes, newLike]);
  })
  .catch((error) => {
    console.error("Error adding like:", error);
  });

  
  };



  return (

    <div>
      {isLiked === 0 ? <button className="btn btn-sm btn-primary" onClick={addLike} disabled={isLoading}>
        {isLoading ? "Liking..." : "Add Like"}
      </button> : null }
      
      {error && <div className="text-danger">Error: {error.message}</div>}
    </div>
  );
}
