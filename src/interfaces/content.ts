interface ILink {
  text: string;
  link: string;
}

interface ISentence {
  parts: (string & ILink)[];
}

interface ISection {
  sentences: (string & ISentence)[];
}

interface IParagraph {
  sections: (string & ISection)[];
}

interface IFile {
  file: string;
  repository: string;
  lines: {
    code: string[];
    output?: string[];
  };
}

type Paragraph = string & IParagraph & IFile;

interface IChapter {
  title?: string;
  paragraphs: Paragraph[];
}

export interface IContent {
  title: string;
  date: string;
  chapters: IChapter[];
}
