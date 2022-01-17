import React from "react";
import Paragraph from "../paragraph/Paragraph";
import H4 from '/components/head_line/H4'

export default function Card({ src, text, title, alt }) {
  return (
    <div className="text-center pb-4">
      <div className="flex justify-center mb-4">
        <img className="w-10 h-10" src={`/${src}`} alt={alt} />
      </div>
        <H4>
          {title}
        </H4>
          <Paragraph>{text}</Paragraph>
    </div>
  );
}
