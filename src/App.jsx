import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PostsList from "../components/PostsLits"
import { PostsProvider } from "../PostsProvider"
import PostPage from "../pages/PostPage"


function App() {


  return (
    <PostsProvider>
    <BrowserRouter>
      <Routes>

        <Route index path="posts" element={<PostsList />}/>
        <Route path="posts/:id" element={<PostPage />}/>

      </Routes>

    </BrowserRouter>
    </PostsProvider>
    
  )
}

export default App
