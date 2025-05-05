import React from "react";
import { Link } from "react-router-dom";
import "../app.css";

export default function TopNav() {
  return (
    <header className="main-header">
      <div>
        <a className="header-logo" href="/">
          uncomplex
        </a>
      </div>
      <div>
        <Link to="/cs">Computer Science</Link>
      </div>
      <div>
        <Link to="/physics">Physics</Link>
      </div>
    </header>
  );
}
