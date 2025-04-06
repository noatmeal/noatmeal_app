import React from "react";

// Define props matching the nested structure of third-example.yaml
interface ThirdExampleProps {
  content: {
    postTitle?: string;
    meta?: {
      publication_date?: string;
      tags?: string[];
    };
    mainContent?: {
      introduction?: string;
      sections?: Array<{
        heading?: string;
        text?: string;
        items?: string[];
      }>;
    };
  };
}

export function ThirdExample({ content }: ThirdExampleProps) {
  // Use optional chaining and nullish coalescing for safer access
  const title = content?.postTitle ?? "Untitled";
  const pubDate = content?.meta?.publication_date;
  const tags = content?.meta?.tags ?? [];
  const intro = content?.mainContent?.introduction;
  const sections = content?.mainContent?.sections ?? [];

  return (
    <>
      <h1>{title}</h1>
      {pubDate && (
        <p>
          <em>Published: {pubDate}</em>
        </p>
      )}
      {tags.length > 0 && (
        <div className="not-prose text-sm text-muted-foreground mb-4">
          {" "}
          {/* Example: Style tags differently */}
          <strong>Tags:</strong> {tags.join(", ")}
        </div>
      )}
      {intro && <p>{intro}</p>}

      {sections.map((section, index) => (
        <section key={index} className="mt-6">
          {" "}
          {/* Add some margin between sections */}
          {section.heading && <h2>{section.heading}</h2>}
          {section.text && <p>{section.text}</p>}
          {section.items && section.items.length > 0 && (
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  );
}
