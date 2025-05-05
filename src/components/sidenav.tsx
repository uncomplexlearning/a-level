import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slug } from "github-slugger";
import "../app.css";

interface Heading {
  level: number;
  text: string;
  id: string;
}

export default function Sidenav({
  content,
  pathname,
}: {
  content: string;
  pathname: string;
}) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headingRegex = /^(#{1,3})\s+(.*)$/gm;
    const matches: Heading[] = [];
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      matches.push({
        level: match[1].length,
        text: match[2],
        id: slug(match[2]),
      });
    }
    setHeadings(matches);
  }, [content]);

  function styleLevel(level: number) {
    switch (level) {
      case 1:
        return "sidenav-heading";
      default:
        return "sidenav-content";
    }
  }

  return (
    <nav className="sidenav">
      <ul>
        {headings.map((h, idx) => (
          <li
            key={idx}
            style={{ marginLeft: (h.level - 1) * 16 }}
            className={styleLevel(h.level)}
          >
            <Link to={{ pathname: `/${pathname}`, hash: `#${h.id}` }}>
              {h.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
