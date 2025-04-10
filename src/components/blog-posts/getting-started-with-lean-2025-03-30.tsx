import React from "react";

import { File } from "@/components/file";
import { IContent } from "@/interfaces/content";

import Link from "next/link";

export function GettingStartedWithLean20250330({
  content,
}: {
  content: IContent;
}) {
  const { chapters, title } = content;

  return (
    <>
      <h1>{title}</h1>

      <p>
        {chapters[0].paragraphs[0].sections[0].sentences[0].parts[0]}{" "}
        <Link
          href={
            chapters[0].paragraphs[0].sections[0].sentences[0].parts[1].link
          }
        >
          {chapters[0].paragraphs[0].sections[0].sentences[0].parts[1].text}
        </Link>{" "}
        {chapters[0].paragraphs[0].sections[0].sentences[0].parts[2]}{" "}
        {chapters[0].paragraphs[0].sections[1]}
      </p>

      <p>
        {chapters[0].paragraphs[1].sections[0].sentences[0].parts[0]}{" "}
        <Link
          href={
            chapters[0].paragraphs[1].sections[0].sentences[0].parts[1].link
          }
        >
          {chapters[0].paragraphs[1].sections[0].sentences[0].parts[1].text}
        </Link>{" "}
        {chapters[0].paragraphs[1].sections[0].sentences[0].parts[2]}{" "}
        <Link
          href={
            chapters[0].paragraphs[1].sections[0].sentences[0].parts[3].link
          }
        >
          {chapters[0].paragraphs[1].sections[0].sentences[0].parts[3].text}
        </Link>
        {chapters[0].paragraphs[1].sections[0].sentences[0].parts[4]}{" "}
        {chapters[0].paragraphs[1].sections[0].sentences[1]}{" "}
        {chapters[0].paragraphs[1].sections[0].sentences[2].parts[0]}{" "}
        <Link
          href={
            chapters[0].paragraphs[1].sections[0].sentences[2].parts[1].link
          }
        >
          {chapters[0].paragraphs[1].sections[0].sentences[2].parts[1].text}
        </Link>{" "}
        {chapters[0].paragraphs[1].sections[0].sentences[2].parts[2]}{" "}
        <Link
          href={
            chapters[0].paragraphs[1].sections[0].sentences[2].parts[3].link
          }
        >
          {chapters[0].paragraphs[1].sections[0].sentences[2].parts[3].text}
        </Link>{" "}
        {chapters[0].paragraphs[1].sections[0].sentences[2].parts[4]}{" "}
        {chapters[0].paragraphs[1].sections[0].sentences[3]}
      </p>

      <h2>{chapters[1].title}</h2>

      <p>{chapters[1].paragraphs[0]}</p>

      <File file={chapters[1].paragraphs[1]} />

      <div className="m-4" />

      <h2>{chapters[2].title}</h2>

      <p>{chapters[2].paragraphs[0]}</p>

      <div className="flex flex-wrap gap-4 justify-center">
        <File file={chapters[2].paragraphs[1]} />
        <File file={chapters[2].paragraphs[2]} />
      </div>
      <div className="m-4" />
      <File file={chapters[2].paragraphs[3]} />
      <div className="m-4" />
      <p>{chapters[2].paragraphs[4]}</p>
    </>
  );
}
