/* eslint-disable no-extra-parens */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { ReactNode } from "react";
import Lang from "./lang.tsx";
import languageKey from "../locales/language-key.ts";
import Content from "./content.tsx";
import Further from "./Further.tsx";

interface CardProps {
  text: languageKey;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string | languageKey;
  more?: string;
}

const ContentUnit = ({ text, level, children, more }: CardProps) => {
  const GenerateContent = (): ReactNode => {
    const keys: languageKey[] = children.split(" ") as languageKey[];
    console.log("keys", keys);
    return keys.map((sentence) => (
      <p key={sentence}>
        <Lang lnkey={sentence} />
      </p>
    ));
  };
  return (
    <Content level={level} text={text}>
      <GenerateContent />
      {more && <Further>{more}</Further>}
    </Content>
  );
};

export default ContentUnit;
