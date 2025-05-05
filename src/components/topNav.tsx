import React from "react";
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
        <a href="/cs">Computer Science</a>
      </div>
      <div>
        <a href="/physics">Physics</a>
      </div>
    </header>
  );
}
