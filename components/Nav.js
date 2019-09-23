import React from "react";
import Link from "./ActiveLink";
// import "../sass/main.scss";

export default function nav() {
  return (
    <React.Fragment>
      {/* beginning of bootstrap navbar */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Hi!
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav navbar-links">
            <li class="nav-item active">
              <Link activeClassName="active" href="/">
                <a className="nav-link ">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link activeClassName="active" href="/about">
                <a className="nav-link ">About</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link activeClassName="active" href="/rules">
                <a className="nav-link ">House of Rules</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link activeClassName="active" href="/resources">
                <a className="nav-link ">Resources</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link activeClassName="active" href="/angry">
                <a className="nav-link ">Angry Feminist Corner</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* end of bootstrap navbar */}
      {/* <div className="inner">
        <h3 className="masthead-brand">HelloNext</h3>
        <nav className="nav nav-masthead justify-content-center">
          <Link activeClassName="active" href="/">
            <a className="nav-link ">Home</a>
          </Link>
          <Link activeClassName="active" href="/about">
            <a className="nav-link ">About</a>
          </Link>
          <Link activeClassName="active" href="/quizzes">
            <a className="nav-link ">Quizzes</a>
          </Link>
          <Link activeClassName="active" href="/rules">
            <a className="nav-link ">House of Rules</a>
          </Link>
          <Link activeClassName="active" href="/resources">
            <a className="nav-link ">Resources</a>
          </Link>
          <Link activeClassName="active" href="/angry">
            <a className="nav-link ">Angry Feminist Corner</a>
          </Link>
        </nav>
      </div> */}
    </React.Fragment>
  );
}
