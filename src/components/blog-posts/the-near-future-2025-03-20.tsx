import React from "react";
import Link from "next/link";

export function TheNearFuture20250320({ content }: TheNearFutureProps) {
  const {
    title = "Untitled Post",
    date = "No date",
    firstParagraph = "",
    listOfWants = [],
    secondParagraph = "",
    thirdParagraph = "",
  } = content || {};

  return (
    <>
      <h1>{title}</h1>
      <p>Published on: {date}</p>

      {firstParagraph?.content && <p>{firstParagraph.content}</p>}

      <ul className="list-none pl-0 my-4">
        <li
          key={0}
          className="flex items-start mb-2 before:content-['->'] before:mr-2"
        >
         <span>{listOfWants.firstWant.content}</span>
        </li>
        <li
          key={1}
          className="flex items-start mb-2 before:content-['->'] before:mr-2"
        >
          More stuff
        </li>
      </ul>

      {secondParagraph?.content && <p>{secondParagraph.content}</p>}

      {thirdParagraph?.content && <p>{thirdParagraph.content}</p>}
    </>
  );
}
