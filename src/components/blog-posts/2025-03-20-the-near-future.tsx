import React from "react";

// Define the structure for a single item in the listOfWants array
interface WantItem {
  content: string;
  links?: {
    [key: string]: string; // Allows for arbitrary link keys like 'lambdaCube'
  };
}

// Define the structure for a paragraph that might contain links
interface ParagraphWithLinks {
  content: string;
  links?: {
    [key: string]: string; // Allows for arbitrary link keys like 'cindarellaBook'
  };
}

// Define the overall structure of the content prop based on the YAML file
interface TheNearFutureContent {
  title?: string;
  date?: string;
  firstParagraph?: {
    content?: string;
  };
  listOfWants?: WantItem[];
  secondParagraph?: ParagraphWithLinks;
  thirdParagraph?: {
    content?: string;
  };
}

// Define the props for the component
interface TheNearFutureProps {
  content: TheNearFutureContent;
}

// Helper function to render links if they exist
const renderLinks = (links: { [key: string]: string } | undefined) => {
  if (!links) return null;
  return (
    <small className="ml-2">
      (
      {Object.entries(links).map(([key, href], index, arr) => (
        <React.Fragment key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {key}
          </a>
          {index < arr.length - 1 ? ", " : ""}
        </React.Fragment>
      ))}
      )
    </small>
  );
};

export function TheNearFuture({ content }: TheNearFutureProps) {
  // Destructure with default values for safety
  const {
    title = "Untitled Post",
    date = "No date",
    firstParagraph,
    listOfWants = [],
    secondParagraph,
    thirdParagraph,
  } = content || {};

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{title}</h1>
      <p>
        <em>Published on: {date}</em>
      </p>

      {firstParagraph?.content && <p>{firstParagraph.content}</p>}

      {listOfWants.length > 0 && (
        <>
          <h2>Wants:</h2>
          <ul>
            {listOfWants.map((item, index) => (
              <li key={index}>
                {item.content}
                {renderLinks(item.links)}
              </li>
            ))}
          </ul>
        </>
      )}

      {secondParagraph?.content && (
        <p>
          {secondParagraph.content}
          {renderLinks(secondParagraph.links)}
        </p>
      )}

      {thirdParagraph?.content && <p>{thirdParagraph.content}</p>}
    </article>
  );
}
