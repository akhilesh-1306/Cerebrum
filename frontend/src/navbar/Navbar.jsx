import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar-wrapper">
            <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Cerebrum</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" d-flex collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                {/* <a class="nav-link" aria-current="page" href="#">Home</a> */}
                                {/* <Link class="nav-link" to="/">Home</Link> */}
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Explore</a> */}
                                <Link class="nav-link" to="/explore">Explore</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Write</a> */}
                                <Link class="nav-link" to="/write">Write</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Profile</a> */}
                                <Link class="nav-link" to="/profile">Profile</Link>
                            </li>
                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}