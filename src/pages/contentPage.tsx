import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "../app.css";

import Sidenav from "../components/sidenav";
import TopNav from "../components/topNav";
import SidebarToggle from "../components/sidebarToggle";

export default function ContentPage({ file }: { file: string }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/markdown/${file}`)
      .then((res) => res.text())
      .then(setContent);
  }, [file]);

  return (
    <>
      <TopNav />
      <SidebarToggle content={content} />
      <div className="body-container">
        <div className="markdown-container">
          <div className="markdown-content">
            <Markdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[
                rehypeKatex,
                rehypeSlug,
                rehypeRaw,
                rehypeHighlight,
              ]}
            >
              {content}
            </Markdown>
          </div>
        </div>
        <div className="sidenav-container">
          <Sidenav content={content} />
        </div>
      </div>
      <footer className="main-footer">
        <div>
          © 2025 Arthur L<br />
          Made with ❤︎ at 3am
        </div>
      </footer>
    </>
  );
}
