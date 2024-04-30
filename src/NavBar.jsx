import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark mb-3">
            <a className="navbar-brand me-3 ms-3" href="/">Social Media</a>
            <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" onClick={() => document.getElementById("navbarNav").classList.toggle("show")}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                       <Link className="nav-link" to="/posts">Posts</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to="/posts-add">Add Post</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/friends">Friends</Link>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
            </div>
        </nav>
    );
}