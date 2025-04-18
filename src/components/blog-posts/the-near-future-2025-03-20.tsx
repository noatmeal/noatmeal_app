import React from "react";

import Link from "next/link";

import { IContent } from "@/interfaces/content";

export function TheNearFuture20250320({ content }: { content: IContent }) {
  const { chapters, title } = content;
  const { paragraphs } = chapters[0];
  return (
    <>
      <h1>{title}</h1>

      <p>{paragraphs[0].sections[0]}</p>

      <ul className="list-none pl-0 my-4">
        <li
          key="firstWant"
          className="flex items-baseline mb-2 
                     before:content-['->'] before:mr-2 before:flex-shrink-0"
        >
          {paragraphs[0].sections[1].sentences[0]}
        </li>
        <li
          key="secondWant"
          className="flex items-baseline mb-2 
                     before:content-['->'] before:mr-2 before:flex-shrink-0"
        >
          {paragraphs[0].sections[1].sentences[1]}
        </li>
        <li
          key="thirdWant"
          className="flex items-baseline mb-2 
                     before:content-['->'] before:mr-2 before:flex-shrink-0"
        >
          {paragraphs[0].sections[1].sentences[2]}
        </li>
        <li
          key="fourthWant"
          className="flex items-baseline mb-2 
                     before:content-['->'] before:mr-2 before:flex-shrink-0"
        >
          <span>
            {paragraphs[0].sections[1].sentences[3].parts[0]}
            <Link
              className="ml-[1ch]"
              href={paragraphs[0].sections[1].sentences[3].parts[1].link}
            >
              {paragraphs[0].sections[1].sentences[3].parts[1].text}
            </Link>
            {paragraphs[0].sections[1].sentences[3].parts[2]}
          </span>
        </li>
      </ul>

      <p>
        {paragraphs[1].sections[0]}{" "}
        {paragraphs[1].sections[1].sentences[0].parts[0]}{" "}
        <Link href={paragraphs[1].sections[1].sentences[0].parts[1].link}>
          {paragraphs[1].sections[1].sentences[0].parts[1].text}
        </Link>{" "}
        {paragraphs[1].sections[1].sentences[0].parts[2]}
      </p>

      <p>
        {paragraphs[2].sections[0].sentences[0].parts[0]}
        <Link href={paragraphs[2].sections[0].sentences[0].parts[1].link}>
          {paragraphs[2].sections[0].sentences[0].parts[1].text}
        </Link>
        {paragraphs[2].sections[0].sentences[0].parts[2]}{" "}
        {paragraphs[2].sections[1]}
      </p>

      <p>{paragraphs[3]}</p>
    </>
  );
}
