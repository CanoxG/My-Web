import React from "react";
import Text from "../text/Text";

export default function Card({ src, text, title, alt }) {
  return (
    <div className="text-center pb-4">
      <div className="flex justify-center mb-4">
        <img className="w-10 h-10" src={`/images/${src}`} alt={alt} />
      </div>
      <div className="mt-2">
        <h4 className="text-black text-md font-black">{title}</h4>
        <div className="mt-2 text-xs">
          <Text>{text}</Text>
        </div>
      </div>
    </div>
  );
}
