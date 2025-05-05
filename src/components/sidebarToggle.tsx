import "../app.css";
import React, { useState } from "react";
import Sidenav from "./sidenav";

export default function SidebarToggle({ content }: { content: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar-toggle-container">
      <button
        className={`sidebar-toggle-btn ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {open ? "x" : "☰"}
      </button>
      {open && (
        <div className="mobile-sidebar">
          <Sidenav content={content} />
        </div>
      )}
    </div>
  );
}
