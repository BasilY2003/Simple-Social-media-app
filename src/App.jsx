import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsList from "../components/PostsLits";
import { PostsProvider } from "../PostsProvider";
import PostPage from "../pages/PostPage";
import NavBar from "./NavBar";
import AddPage from "../pages/AddPage";
import UpdatePage from "../pages/UpdatePage";

function App() {
  return (
    <>
      <PostsProvider>
        <BrowserRouter>
        <NavBar />

          <Routes>
            <Route path="/posts" element={<PostsList />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/posts-add" element={<AddPage />} />
            <Route path="/posts/:id/update" element={<UpdatePage />} />
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </>
  );
}

export default App;
