import React from "react";
import Link from "next/link";

interface TheNearFuture20250320Props {}

export function TheNearFuture20250320({ content }: TheNearFuture20250320Props) {
  const {
    title = "Untitled Post",
    firstParagraph = "",
    listOfWants = {},
    secondParagraph = "",
    thirdParagraph = "",
  } = content || {};
  console.log(listOfWants.fourthWant);
  return (
    <>
      <h1>{title}</h1>

      {firstParagraph?.content && <p>{firstParagraph.content}</p>}

      <ul className="list-none pl-0 my-4">
        <li
          key={0}
          className="flex items-baseline mb-2 before:content-['->'] before:mr-2 before:flex-shrink-0"
        >
          <span>{listOfWants.firstWant.content}</span>
        </li>
        <li
          key={1}
          className="flex items-baseline mb-2 before:content-['->'] before:mr-2 before:flex-shrink-0"
        >
          {listOfWants.secondWant.content}
        </li>
        <li
          key={2}
          className="flex items-baseline mb-2 before:content-['->'] before:mr-2 before:flex-shrink-0"
        >
          {listOfWants.thirdWant.content}
        </li>
        <li
          key={3}
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

      {secondParagraph?.content && <p>{secondParagraph.content}</p>}

      {thirdParagraph?.content && <p>{thirdParagraph.content}</p>}
    </>
  );
}
