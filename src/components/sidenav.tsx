import React, { useEffect, useState } from "react";
import { slug } from "github-slugger";
import "../app.css";

interface Heading {
  level: number;
  text: string;
  id: string;
}

export default function Sidenav({ content }: { content: string }) {
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
            <a href={`#${h.id}`}>{h.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
