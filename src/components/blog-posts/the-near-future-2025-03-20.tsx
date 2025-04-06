import React from "react";
import Link from "next/link";

// Define types based on the YAML structure
interface ContentItem {
  content: string;
}

interface LinkItem {
  content: string;
  link: string;
}

interface FourthWantContent {
  sentence: {
    firstPart: string;
    secondPart: LinkItem;
    finalPart: string;
  };
}

interface ListOfWants {
  firstWant: ContentItem;
  secondWant: ContentItem;
  thirdWant: ContentItem;
  fourthWant: { content: FourthWantContent };
}

interface TheNearFutureContent {
  title: string;
  date: string; // Assuming date is always present based on YAML
  firstParagraph: ContentItem;
  listOfWants: ListOfWants;
  secondParagraph: ContentItem & { links?: { [key: string]: string } }; // Added optional links
  thirdParagraph: ContentItem;
}

interface TheNearFuture20250320Props {
  content: TheNearFutureContent;
}

export function TheNearFuture20250320({ content }: TheNearFuture20250320Props) {
  // Destructure with types, defaults are less necessary but can be kept for robustness if needed
  // Removed default values as types should guarantee structure, assuming valid YAML input
  const {
    title,
    firstParagraph,
    listOfWants,
    secondParagraph,
    thirdParagraph,
  } = content;
  return (
    <>
      <h1>{title}</h1>

      <p>{firstParagraph.content}</p>

      <ul className="list-none pl-0 my-4">
        <li
          key="firstWant"
          className="flex items-baseline mb-2 before:content-['->'] before:mr-2 before:flex-shrink-0"
        >
          {listOfWants.firstWant.content}
        </li>
        <li
          key="secondWant"
          className="flex items-baseline mb-2 before:content-['->'] before:mr-2 before:flex-shrink-0"
        >
          {listOfWants.secondWant.content}
        </li>
        <li
          key="thirdWant"
          className="flex items-baseline mb-2 before:content-['->'] before:mr-2 before:flex-shrink-0"
        >
          {listOfWants.thirdWant.content}
        </li>
        <li
          key="fourthWant"
          className="flex items-baseline mb-2 before:content-['->'] before:mr-2 before:flex-shrink-0"
        >
          {listOfWants.fourthWant.content.sentence.firstPart}
          <span>&nbsp;</span>
          <Link href={listOfWants.fourthWant.content.sentence.secondPart.link}>
            {listOfWants.fourthWant.content.sentence.secondPart.content}
          </Link>
          {listOfWants.fourthWant.content.sentence.finalPart}
        </li>
      </ul>

      <p>{secondParagraph.content}</p>

      {/* Example of accessing optional links if needed */}
      {/* {secondParagraph.links?.cindarellaBook && <a href={secondParagraph.links.cindarellaBook}>Cindarella Book</a>} */}

      <p>{thirdParagraph.content}</p>
    </>
  );
}
