export type PolicyTextSegment = {
  text: string;
  href?: string;
  strong?: boolean;
};

export type PolicyParagraph = string | PolicyTextSegment[];

export type PolicyStep = {
  title: string;
  paragraphs: PolicyParagraph[];
  bullets?: PolicyParagraph[];
};

export type PolicySection = {
  title: string;
  number?: string;
  description?: string;
  steps?: PolicyStep[];
};

export type PolicyContent = {
  title: string;
  updatedAt: string;
  intro: string;
  sections: PolicySection[];
};
