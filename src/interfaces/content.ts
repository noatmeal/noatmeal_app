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

export interface IFile {
  name: string;
  repository: string;
  lines: {
    code: string[];
    output?: string[];
  };
}

interface IChapter {
  title?: string;
  paragraphs: (string & IParagraph & IFile)[];
}

export interface IContent {
  title: string;
  date: string;
  chapters: IChapter[];
}
