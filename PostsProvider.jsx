import { createContext, useContext, useEffect, useState } from "react";

const POSTS_URL = "http://localhost:8080/posts";
const postsContext = createContext();

function PostsProvider({children}) {

    const [posts,setPosts] = useState([]);
    const[selectedPost,setSelectedPost] = useState(null);



    useEffect( function(){

        fetch(POSTS_URL)
    
            .then(rs => rs.json())
            .then(data => {
                const postlists = data._embedded.postList ;
                setPosts(() => postlists);
            })
    
            .catch(e => console.log(e));
    
        
    
    }, []);
    

    return(
        <postsContext.Provider value={{posts,setPosts,selectedPost,setSelectedPost}}>
            {children}
        </postsContext.Provider>
    )

}

function usePosts() {
    const context = useContext(postsContext);
    if (context === undefined)
      throw new Error("CitiesContext was used outside the CitiesProvider");
    return context;
  }




export {PostsProvider,usePosts}