// CodeContainer.js
import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeContainer = ({ code }) => {
  return (
    <div
      style={{
        margin: "20px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <SyntaxHighlighter style={tomorrow}>{code}</SyntaxHighlighter>
    </div>
  );
};

export default CodeContainer;
