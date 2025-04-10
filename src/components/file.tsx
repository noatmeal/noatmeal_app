import React from "react";
import { IFile } from "@/interfaces/content";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function File({ file }: { file: IFile }) {
  return (
    <Card aria-label="A code file" className="mx-auto w-fit">
      <CardHeader>
        <CardTitle>{file.name}</CardTitle>
        <CardDescription>{file.repository}</CardDescription>
      </CardHeader>
      <CardContent>
        {file.lines.code.map((line, index) => {
          if (line !== " ") {
            return <div key={index}>{line}</div>;
          } else {
            return <br key={index} />;
          }
        })}
      </CardContent>
      {file?.lines?.output ? (
        <CardFooter className="border-t">
          {file.lines.output.map((line, index) => {
            if (line !== " ") {
              return <div key={index}>{line}</div>;
            } else {
              return <br key={index} />;
            }
          })}
        </CardFooter>
      ) : (
        <></>
      )}
    </Card>
  );
}
