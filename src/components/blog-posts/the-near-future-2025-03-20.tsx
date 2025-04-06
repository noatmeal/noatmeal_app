import React from "react";

import Link from "next/link";

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
  date: string;
  firstParagraph: ContentItem;
  listOfWants: ListOfWants;
  secondParagraph: ContentItem & { links?: { [key: string]: string } };
  thirdParagraph: ContentItem;
}

interface TheNearFuture20250320Props {
  content: TheNearFutureContent;
}

export function TheNearFuture20250320({ content }: TheNearFuture20250320Props) {
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

      <p>{thirdParagraph.content}</p>
    </>
  );
}
