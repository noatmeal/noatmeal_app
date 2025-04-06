import React from "react";

// Define props for this component, matching second-example.yaml structure
interface SecondExampleProps {
  content: {
    title?: string; // Use optional chaining or provide defaults
    publishDate?: string;
    author?: string;
    body?: string;
  };
}

export function SecondExample({ content }: SecondExampleProps) {
  const {
    title = "Default Title",
    publishDate,
    author,
    body = "No content available.",
  } = content || {};

  return (
    <>
      <h1>{title}</h1>
      {publishDate && ( // Conditionally render if data exists
        <p>
          <em>Published on: {publishDate}</em>
        </p>
      )}
      {author && (
        <p>
          <em>By: {author}</em>
        </p>
      )}
      {/* Render the main body content */}
      <div style={{ whiteSpace: "pre-wrap" }}>{body}</div>
    </>
  );
}
