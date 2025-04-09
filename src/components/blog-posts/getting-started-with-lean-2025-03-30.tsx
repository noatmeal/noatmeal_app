import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export function GettingStartedWithLean20250330({ content }) {
  const { chapters, title } = content;
  console.log(chapters[3].paragraphs[2]);

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

      <Card className="mx-auto w-fit">
        <CardHeader>
          <CardTitle>{chapters[1].paragraphs[1].file}</CardTitle>
          <CardDescription>
            {chapters[1].paragraphs[1].repository}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>{chapters[1].paragraphs[1].lines.code[0]}</div>
          <div>{chapters[1].paragraphs[1].lines.code[1]}</div>
        </CardContent>
        <CardFooter className="border-t">
          {chapters[1].paragraphs[1].lines.output[0]}
        </CardFooter>
      </Card>

      <div className="m-4" />

      <h2>{chapters[2].title}</h2>

      <p>{chapters[3].paragraphs[0]}</p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Card className="w-fit">
          <CardHeader>
            <CardTitle>{chapters[3].paragraphs[1].file}</CardTitle>
            <CardDescription>
              {chapters[3].paragraphs[1].repository}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {chapters[3].paragraphs[1].lines.code.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </CardContent>
        </Card>
        <Card className="w-fit">
          <CardHeader>
            <CardTitle>{chapters[3].paragraphs[2].file}</CardTitle>
            <CardDescription>
              {chapters[3].paragraphs[2].repository}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {chapters[3].paragraphs[2].lines.code.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="m-4" />
      <Card className="mx-auto w-fit">
        <CardHeader>
          <CardTitle>{chapters[3].paragraphs[3].file}</CardTitle>
          <CardDescription>
            {chapters[3].paragraphs[3].repository}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {chapters[3].paragraphs[3].lines.code.map((line, index) => {
            if (line !== " ") {
              return <div key={index}>{line}</div>;
            } else {
              return <br key={index} />;
            }
          })}
        </CardContent>
        <CardFooter className="border-t">
          {chapters[3].paragraphs[3].lines.output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </CardFooter>
      </Card>
      <div className="m-4" />
      <p>{chapters[3].paragraphs[4]}</p>
    </>
  );
}
