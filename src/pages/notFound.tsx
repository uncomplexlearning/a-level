import "../app.css";
import React from "react";
import TopNav from "../components/topNav";

export default function NotFound() {
  return (
    <>
      <TopNav />
      <div className="temp-full-text">Not found :(</div>
    </>
  );
}
