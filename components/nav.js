import React from "react";
import Link from "./ActiveLink";

export default function nav() {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
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
      </div>
    </header>
  );
}
