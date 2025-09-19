import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import "./code.scss";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
// eslint-disable-next-line max-len
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
// eslint-disable-next-line max-len
import markdown from "react-syntax-highlighter/dist/esm/languages/hljs/markdown";
import { FaRegCopy } from "react-icons/fa";
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);

interface CodeType {
  language: "bash" | "typescript" | "markdown";
  children: string | string[];
}

const Code = ({ language, children }: CodeType) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    const textToCopy = Array.isArray(children) ? children.join("\n") : children;
    navigator.clipboard.writeText(textToCopy);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <div className="code-container">
      <button
        className="copy-button"
        onClick={handleCopy}
        aria-label={copy ? "Copied!" : "Copy code"}
        type="button"
      >
        <FaRegCopy
          width={25}
          height={25}
          style={{
            color: copy ? "#4CAF50" : "white",
          }}
        />
      </button>
      <SyntaxHighlighter useInlineStyles={false} language={language}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
export default Code;
