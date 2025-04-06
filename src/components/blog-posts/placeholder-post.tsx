import React from "react";

// Define the expected props structure for this specific component
interface PlaceholderPostProps {
  content: {
    title: string;
    date: string;
    content: string;
  };
}

// The component name matches the PascalCase version of the slug
export function PlaceholderPost({ content }: PlaceholderPostProps) {
  // Basic validation or default values could be added here
  const {
    title = "Untitled Post",
    date = "No date",
    content: textContent = "",
  } = content || {};

  return (
    <>
      <h1>{title}</h1>
      <p>
        <em>Published on: {date}</em>
      </p>
      {/* Using prose class for basic markdown-like styling */}
      <div style={{ whiteSpace: "pre-wrap" }}>{textContent}</div>
    </>
  );
}

// Ensure the dynamic import in page.tsx matches this (named export).
