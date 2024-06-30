// components/HtmlRenderer.js
import React from "react";
import DOMPurify from "dompurify";

const HTMLRenderer = ({ content }: any) => {
   const sanitizedContent = DOMPurify.sanitize(content);

   return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
};

export default HTMLRenderer;
